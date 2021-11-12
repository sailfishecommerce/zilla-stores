/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import FashionLayout from "../layout/FashionLayout";

export default function ShopGridLs() {
    return (
        <FashionLayout title="Shop grid left sidebar">
            <>
                <div className="page-title-overlap bg-dark pt-4">
                    <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                                    <li className="breadcrumb-item">
                                        <Link href="/index" passHref>
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
                                        Grid left sidebar
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                            <h1 className="h3 text-light mb-0">
                                Shop grid left sidebar
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="container pb-5 mb-2 mb-md-4">
                    <div className="row">
                        <aside className="col-lg-4">
                            <div
                                className="offcanvas offcanvas-collapse bg-white w-100 rounded-3 shadow-lg py-1"
                                id="shop-sidebar"
                                style={{ maxWidth: "22rem" }}
                            >
                                <div className="offcanvas-header align-items-center shadow-sm">
                                    <h2 className="h5 mb-0">Filters</h2>
                                    <button
                                        className="btn-close ms-auto"
                                        type="button"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="offcanvas-body py-grid-gutter px-lg-grid-gutter">
                                    {/*<!-- Categories-->*/}
                                    <div className="widget widget-categories mb-4 pb-4 border-bottom">
                                        <h3 className="widget-title">
                                            Categories
                                        </h3>
                                        <div
                                            className="accordion mt-n1"
                                            id="shop-categories"
                                        >
                                            {/*<!-- Shoes-->*/}
                                            <div className="accordion-item">
                                                <h3 className="accordion-header">
                                                    <a
                                                        className="accordion-button collapsed"
                                                        href="#shoes"
                                                        role="button"
                                                        data-bs-toggle="collapse"
                                                        aria-expanded="false"
                                                        aria-controls="shoes"
                                                    >
                                                        Shoes
                                                    </a>
                                                </h3>
                                                <div
                                                    className="accordion-collapse collapse"
                                                    id="shoes"
                                                    data-bs-parent="#shop-categories"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="widget widget-links widget-filter">
                                                            <div className="input-group input-group-sm mb-2">
                                                                <input
                                                                    className="widget-filter-search form-control rounded-end"
                                                                    type="text"
                                                                    placeholder="Search"
                                                                />
                                                                <i className="ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"></i>
                                                            </div>
                                                            <ul
                                                                className="widget-list widget-filter-list pt-1"
                                                                style={{
                                                                    height: "12rem",
                                                                }}
                                                                data-simplebar
                                                                data-simplebar-auto-hide="false"
                                                            >
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            View
                                                                            all
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            1,953
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Pumps
                                                                            &amp;
                                                                            High
                                                                            Heels
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            247
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Ballerinas
                                                                            &amp;
                                                                            Flats
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            156
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Sandals
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            310
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Sneakers
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            402
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Boots
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            393
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Ankle
                                                                            Boots
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            50
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Loafers
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            93
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Slip-on
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            122
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Flip
                                                                            Flops
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            116
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Clogs
                                                                            &amp;
                                                                            Mules
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            24
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Athletic
                                                                            Shoes
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            31
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Oxfords
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            9
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Smart
                                                                            Shoes
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            18
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<!-- Clothing-->*/}
                                            <div className="accordion-item">
                                                <h3 className="accordion-header">
                                                    <a
                                                        className="accordion-button"
                                                        href="#clothing"
                                                        role="button"
                                                        data-bs-toggle="collapse"
                                                        aria-expanded="true"
                                                        aria-controls="clothing"
                                                    >
                                                        Clothing
                                                    </a>
                                                </h3>
                                                <div
                                                    className="accordion-collapse collapse show"
                                                    id="clothing"
                                                    data-bs-parent="#shop-categories"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="widget widget-links widget-filter">
                                                            <div className="input-group input-group-sm mb-2">
                                                                <input
                                                                    className="widget-filter-search form-control rounded-end"
                                                                    type="text"
                                                                    placeholder="Search"
                                                                />
                                                                <i className="ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"></i>
                                                            </div>
                                                            <ul
                                                                className="widget-list widget-filter-list pt-1"
                                                                style={{
                                                                    height: "12rem",
                                                                }}
                                                                data-simplebar
                                                                data-simplebar-auto-hide="false"
                                                            >
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            View
                                                                            all
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            2,548
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Blazers
                                                                            &amp;
                                                                            Suits
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            235
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Blouses
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            410
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Cardigans
                                                                            &amp;
                                                                            Jumpers
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            107
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Dresses
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            93
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Hoodie
                                                                            &amp;
                                                                            Sweatshirts
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            122
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Jackets
                                                                            &amp;
                                                                            Coats
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            116
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Jeans
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            215
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Lingerie
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            150
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Maternity
                                                                            Wear
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            8
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Nightwear
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            26
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Shirts
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            164
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Shorts
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            147
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Socks
                                                                            &amp;
                                                                            Tights
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            139
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Sportswear
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            65
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Swimwear
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            18
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            T-shirts
                                                                            &amp;
                                                                            Vests
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            209
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Tops
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            132
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Trousers
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            105
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Underwear
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            87
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<!-- Bags-->*/}
                                            <div className="accordion-item">
                                                <h3 className="accordion-header">
                                                    <a
                                                        className="accordion-button collapsed"
                                                        href="#bags"
                                                        role="button"
                                                        data-bs-toggle="collapse"
                                                        aria-expanded="false"
                                                        aria-controls="bags"
                                                    >
                                                        Bags
                                                    </a>
                                                </h3>
                                                <div
                                                    className="accordion-collapse collapse"
                                                    id="bags"
                                                    data-bs-parent="#shop-categories"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="widget widget-links widget-filter">
                                                            <div className="input-group input-group-sm mb-2">
                                                                <input
                                                                    className="widget-filter-search form-control rounded-end"
                                                                    type="text"
                                                                    placeholder="Search"
                                                                />
                                                                <i className="ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"></i>
                                                            </div>
                                                            <ul
                                                                className="widget-list widget-filter-list pt-1"
                                                                style={{
                                                                    height: "12rem",
                                                                }}
                                                                data-simplebar
                                                                data-simplebar-auto-hide="false"
                                                            >
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            View
                                                                            all
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            801
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Handbags
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            238
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Backpacks
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            116
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Wallets
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            104
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Luggage
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            115
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Lumbar
                                                                            Packs
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            17
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Duffle
                                                                            Bags
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            9
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Bag
                                                                            /
                                                                            Travel
                                                                            Accessories
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            93
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Diaper
                                                                            Bags
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            5
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Lunch
                                                                            Bags
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            8
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Messenger
                                                                            Bags
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            2
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Laptop
                                                                            Bags
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            31
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Briefcases
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            45
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item widget-filter-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span className="widget-filter-item-text">
                                                                            Sport
                                                                            Bags
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            18
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<!-- Sunglasses-->*/}
                                            <div className="accordion-item">
                                                <h3 className="accordion-header">
                                                    <a
                                                        className="accordion-button collapsed"
                                                        href="#sunglasses"
                                                        role="button"
                                                        data-bs-toggle="collapse"
                                                        aria-expanded="false"
                                                        aria-controls="sunglasses"
                                                    >
                                                        Sunglasses
                                                    </a>
                                                </h3>
                                                <div
                                                    className="collapse"
                                                    id="sunglasses"
                                                    data-bs-parent="#shop-categories"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="widget widget-links">
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span>
                                                                            View
                                                                            all
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            1,842
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span>
                                                                            Fashion
                                                                            Sunglasses
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            953
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span>
                                                                            Sport
                                                                            Sunglasses
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            589
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span>
                                                                            Classic
                                                                            Sunglasses
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            300
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<!-- Watches-->*/}
                                            <div className="accordion-item">
                                                <h3 className="accordion-header">
                                                    <a
                                                        className="accordion-button collapsed"
                                                        href="#watches"
                                                        role="button"
                                                        data-bs-toggle="collapse"
                                                        aria-expanded="false"
                                                        aria-controls="watches"
                                                    >
                                                        Watches
                                                    </a>
                                                </h3>
                                                <div
                                                    className="accordion-collapse collapse"
                                                    id="watches"
                                                    data-bs-parent="#shop-categories"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="widget widget-links">
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span>
                                                                            View
                                                                            all
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            734
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span>
                                                                            Fashion
                                                                            Watches
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            572
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span>
                                                                            Casual
                                                                            Watches
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            110
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span>
                                                                            Luxury
                                                                            Watches
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            34
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span>
                                                                            Sport
                                                                            Watches
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            18
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<!-- Accessories-->*/}
                                            <div className="accordion-item">
                                                <h3 className="accordion-header">
                                                    <a
                                                        className="accordion-button collapsed"
                                                        href="#accessories"
                                                        role="button"
                                                        data-bs-toggle="collapse"
                                                        aria-expanded="false"
                                                        aria-controls="accessories"
                                                    >
                                                        Accessories
                                                    </a>
                                                </h3>
                                                <div
                                                    className="accordion-collapse collapse"
                                                    id="accessories"
                                                    data-bs-parent="#shop-categories"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="widget widget-links">
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span>
                                                                            View
                                                                            all
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            920
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span>
                                                                            Belts
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            364
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span>
                                                                            Hats
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            405
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span>
                                                                            Jewelry
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            131
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item">
                                                                    <a
                                                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <span>
                                                                            Cosmetics
                                                                        </span>
                                                                        <span className="fs-xs text-muted ms-3">
                                                                            20
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- Price range-->*/}
                                    <div className="widget mb-4 pb-4 border-bottom">
                                        <h3 className="widget-title">Price</h3>
                                        <div
                                            className="range-slider"
                                            data-start-min="250"
                                            data-start-max="680"
                                            data-min="0"
                                            data-max="1000"
                                            data-step="1"
                                        >
                                            <div className="range-slider-ui"></div>
                                            <div className="d-flex pb-1">
                                                <div className="w-50 pe-2 me-2">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text">
                                                            $
                                                        </span>
                                                        <input
                                                            className="form-control range-slider-value-min"
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="w-50 ps-2">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text">
                                                            $
                                                        </span>
                                                        <input
                                                            className="form-control range-slider-value-max"
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- Filter by Brand-->*/}
                                    <div className="widget widget-filter mb-4 pb-4 border-bottom">
                                        <h3 className="widget-title">Brand</h3>
                                        <div className="input-group input-group-sm mb-2">
                                            <input
                                                className="widget-filter-search form-control rounded-end pe-5"
                                                type="text"
                                                placeholder="Search"
                                            />
                                            <i className="ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"></i>
                                        </div>
                                        <ul
                                            className="widget-list widget-filter-list list-unstyled pt-1"
                                            style={{ maxHeight: "11rem" }}
                                            data-simplebar
                                            data-simplebar-auto-hide="false"
                                        >
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="adidas"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="adidas"
                                                    >
                                                        Adidas
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    425
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="ataylor"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="ataylor"
                                                    >
                                                        Ann Taylor
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    15
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="armani"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="armani"
                                                    >
                                                        Armani
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    18
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="banana"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="banana"
                                                    >
                                                        Banana Republic
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    103
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="bilabong"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="bilabong"
                                                    >
                                                        Bilabong
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    27
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="birkenstock"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="birkenstock"
                                                    >
                                                        Birkenstock
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    10
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="klein"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="klein"
                                                    >
                                                        Calvin Klein
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    365
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="columbia"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="columbia"
                                                    >
                                                        Columbia
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    508
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="converse"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="converse"
                                                    >
                                                        Converse
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    176
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="dockers"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="dockers"
                                                    >
                                                        Dockers
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    54
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="fruit"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="fruit"
                                                    >
                                                        Fruit of the Loom
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    739
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="hanes"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="hanes"
                                                    >
                                                        Hanes
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    92
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="choo"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="choo"
                                                    >
                                                        Jimmy Choo
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    17
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="levis"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="levis"
                                                    >
                                                        Levi&#39;s
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    361
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="lee"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="lee"
                                                    >
                                                        Lee
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    264
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="wearhouse"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="wearhouse"
                                                    >
                                                        Men Wearhouse
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    75
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="newbalance"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="newbalance"
                                                    >
                                                        New Balance
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    218
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="nike"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="nike"
                                                    >
                                                        Nike
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    810
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="navy"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="navy"
                                                    >
                                                        Old Navy
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    147
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="polo"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="polo"
                                                    >
                                                        Polo Ralph Lauren
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    64
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="puma"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="puma"
                                                    >
                                                        Puma
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    370
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="reebok"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="reebok"
                                                    >
                                                        Reebok
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    506
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="skechers"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="skechers"
                                                    >
                                                        Skechers
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    209
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="hilfiger"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="hilfiger"
                                                    >
                                                        Tommy Hilfiger
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    487
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="armour"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="armour"
                                                    >
                                                        Under Armour
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    90
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="urban"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="urban"
                                                    >
                                                        Urban Outfitters
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    152
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="vsecret"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="vsecret"
                                                    >
                                                        Victoria&#39;s Secret
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    238
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="wolverine"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="wolverine"
                                                    >
                                                        Wolverine
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    29
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="wrangler"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="wrangler"
                                                    >
                                                        Wrangler
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    115
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget-filter mb-4 pb-4 border-bottom">
                                        <h3 className="widget-title">Size</h3>
                                        <div className="input-group input-group-sm mb-2">
                                            <input
                                                className="widget-filter-search form-control rounded-end pe-5"
                                                type="text"
                                                placeholder="Search"
                                            />
                                            <i className="ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"></i>
                                        </div>
                                        <ul
                                            className="widget-list widget-filter-list list-unstyled pt-1"
                                            style={{ maxHeight: "11rem" }}
                                            data-simplebar
                                            data-simplebar-auto-hide="false"
                                        >
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="size-xs"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="size-xs"
                                                    >
                                                        XS
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    34
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="size-s"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="size-s"
                                                    >
                                                        S
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    57
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="size-m"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="size-m"
                                                    >
                                                        M
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    198
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="size-l"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="size-l"
                                                    >
                                                        L
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    72
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="size-xl"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="size-xl"
                                                    >
                                                        XL
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    46
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="size-39"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="size-39"
                                                    >
                                                        39
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    112
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="size-40"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="size-40"
                                                    >
                                                        40
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    85
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="size-41"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="size-40"
                                                    >
                                                        41
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    210
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="size-42"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="size-42"
                                                    >
                                                        42
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    57
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="size-43"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="size-43"
                                                    >
                                                        43
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    30
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="size-44"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="size-44"
                                                    >
                                                        44
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    61
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="size-45"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="size-45"
                                                    >
                                                        45
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    23
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="size-46"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="size-46"
                                                    >
                                                        46
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    19
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="size-47"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="size-47"
                                                    >
                                                        47
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    15
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="size-48"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="size-48"
                                                    >
                                                        48
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    12
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="size-49"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="size-49"
                                                    >
                                                        49
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    8
                                                </span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="size-50"
                                                    />
                                                    <label
                                                        className="form-check-label widget-filter-item-text"
                                                        htmlFor="size-50"
                                                    >
                                                        50
                                                    </label>
                                                </div>
                                                <span className="fs-xs text-muted">
                                                    6
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget">
                                        <h3 className="widget-title">Color</h3>
                                        <div className="d-flex flex-wrap">
                                            <div
                                                className="form-check form-option text-center mb-2 mx-1"
                                                style={{ width: "4rem" }}
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="color-blue-gray"
                                                />
                                                <label
                                                    className="form-option-label rounded-circle"
                                                    htmlFor="color-blue-gray"
                                                >
                                                    <span
                                                        className="form-option-color rounded-circle"
                                                        style={{
                                                            backgroundColor:
                                                                "#b3c8db",
                                                        }}
                                                    ></span>
                                                </label>
                                                <label
                                                    className="d-block fs-xs text-muted mt-n1"
                                                    htmlFor="color-blue-gray"
                                                >
                                                    Blue-gray
                                                </label>
                                            </div>
                                            <div
                                                className="form-check form-option text-center mb-2 mx-1"
                                                style={{ width: "4rem" }}
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="color-burgundy"
                                                />
                                                <label
                                                    className="form-option-label rounded-circle"
                                                    htmlFor="color-burgundy"
                                                >
                                                    <span
                                                        className="form-option-color rounded-circle"
                                                        style={{
                                                            backgroundColor:
                                                                "#ca7295",
                                                        }}
                                                    ></span>
                                                </label>
                                                <label
                                                    className="d-block fs-xs text-muted mt-n1"
                                                    htmlFor="color-burgundy"
                                                >
                                                    Burgundy
                                                </label>
                                            </div>
                                            <div
                                                className="form-check form-option text-center mb-2 mx-1"
                                                style={{ width: "4rem" }}
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="color-teal"
                                                />
                                                <label
                                                    className="form-option-label rounded-circle"
                                                    htmlFor="color-teal"
                                                >
                                                    <span
                                                        className="form-option-color rounded-circle"
                                                        style={{
                                                            backgroundColor:
                                                                "#91c2c3",
                                                        }}
                                                    ></span>
                                                </label>
                                                <label
                                                    className="d-block fs-xs text-muted mt-n1"
                                                    htmlFor="color-teal"
                                                >
                                                    Teal
                                                </label>
                                            </div>
                                            <div
                                                className="form-check form-option text-center mb-2 mx-1"
                                                style={{ width: "4rem" }}
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="color-brown"
                                                />
                                                <label
                                                    className="form-option-label rounded-circle"
                                                    htmlFor="color-brown"
                                                >
                                                    <span
                                                        className="form-option-color rounded-circle"
                                                        style={{
                                                            backgroundColor:
                                                                "#9a8480",
                                                        }}
                                                    ></span>
                                                </label>
                                                <label
                                                    className="d-block fs-xs text-muted mt-n1"
                                                    htmlFor="color-brown"
                                                >
                                                    Brown
                                                </label>
                                            </div>
                                            <div
                                                className="form-check form-option text-center mb-2 mx-1"
                                                style={{ width: "4rem" }}
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="color-coral-red"
                                                />
                                                <label
                                                    className="form-option-label rounded-circle"
                                                    htmlFor="color-coral-red"
                                                >
                                                    <span
                                                        className="form-option-color rounded-circle"
                                                        style={{
                                                            backgroundColor:
                                                                "#ff7072",
                                                        }}
                                                    ></span>
                                                </label>
                                                <label
                                                    className="d-block fs-xs text-muted mt-n1"
                                                    htmlFor="color-coral-red"
                                                >
                                                    Coral red
                                                </label>
                                            </div>
                                            <div
                                                className="form-check form-option text-center mb-2 mx-1"
                                                style={{ width: "4rem" }}
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="color-navy"
                                                />
                                                <label
                                                    className="form-option-label rounded-circle"
                                                    htmlFor="color-navy"
                                                >
                                                    <span
                                                        className="form-option-color rounded-circle"
                                                        style={{
                                                            backgroundColor:
                                                                "#696dc8",
                                                        }}
                                                    ></span>
                                                </label>
                                                <label
                                                    className="d-block fs-xs text-muted mt-n1"
                                                    htmlFor="color-navy"
                                                >
                                                    Navy
                                                </label>
                                            </div>
                                            <div
                                                className="form-check form-option text-center mb-2 mx-1"
                                                style={{ width: "4rem" }}
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="color-charcoal"
                                                />
                                                <label
                                                    className="form-option-label rounded-circle"
                                                    htmlFor="color-charcoal"
                                                >
                                                    <span
                                                        className="form-option-color rounded-circle"
                                                        style={{
                                                            backgroundColor:
                                                                "#4e4d4d",
                                                        }}
                                                    ></span>
                                                </label>
                                                <label
                                                    className="d-block fs-xs text-muted mt-n1"
                                                    htmlFor="color-charcoal"
                                                >
                                                    Charcoal
                                                </label>
                                            </div>
                                            <div
                                                className="form-check form-option text-center mb-2 mx-1"
                                                style={{ width: "4rem" }}
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="color-sky-blue"
                                                />
                                                <label
                                                    className="form-option-label rounded-circle"
                                                    htmlFor="color-sky-blue"
                                                >
                                                    <span
                                                        className="form-option-color rounded-circle"
                                                        style={{
                                                            backgroundColor:
                                                                "#8bcdf5",
                                                        }}
                                                    ></span>
                                                </label>
                                                <label
                                                    className="d-block fs-xs text-muted mt-n1"
                                                    htmlFor="color-sky-blue"
                                                >
                                                    Sky blue
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        {/*<!-- Content  -->*/}
                        <section className="col-lg-8">
                            {/*<!-- Toolbar-->*/}
                            <div className="d-flex justify-content-center justify-content-sm-between align-items-center pt-2 pb-4 pb-sm-5">
                                <div className="d-flex flex-wrap">
                                    <div className="d-flex align-items-center flex-nowrap me-3 me-sm-4 pb-3">
                                        <label
                                            className="text-light opacity-75 text-nowrap fs-sm me-2 d-none d-sm-block"
                                            htmlFor="sorting"
                                        >
                                            Sort by:
                                        </label>
                                        <select
                                            className="form-select"
                                            id="sorting"
                                        >
                                            <option>Popularity</option>
                                            <option>Low - Hight Price</option>
                                            <option>High - Low Price</option>
                                            <option>Average Rating</option>
                                            <option>A - Z Order</option>
                                            <option>Z - A Order</option>
                                        </select>
                                        <span className="fs-sm text-light opacity-75 text-nowrap ms-2 d-none d-md-block">
                                            of 287 products
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex pb-3">
                                    <a
                                        className="nav-link-style nav-link-light me-3"
                                        href="#"
                                    >
                                        <i className="ci-arrow-left"></i>
                                    </a>
                                    <span className="fs-md text-light">
                                        1 / 5
                                    </span>
                                    <a
                                        className="nav-link-style nav-link-light ms-3"
                                        href="#"
                                    >
                                        <i className="ci-arrow-right"></i>
                                    </a>
                                </div>
                                <div className="d-none d-sm-flex pb-3">
                                    <a
                                        className="btn btn-icon nav-link-style bg-light text-dark disabled opacity-100 me-2"
                                        href="#"
                                    >
                                        <i className="ci-view-grid"></i>
                                    </a>
                                    <Link href="/shop-list-ls" passHref>
                                        <a className="btn btn-icon nav-link-style nav-link-light">
                                            <i className="ci-view-list"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            {/*<!-- Products grid-->*/}
                            <div className="row mx-n2">
                                {/*<!-- Product-->*/}
                                <div className="col-md-4 col-sm-6 px-2 mb-4">
                                    <div className="card product-card">
                                        <button
                                            className="btn-wishlist btn-sm"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title="Add to wishlist"
                                        >
                                            <i className="ci-heart"></i>
                                        </button>
                                        <Link passHref href="/shop-single-v1">
                                            <a className="card-img-top d-block overflow-hidden">
                                                <img
                                                    src="/img/shop/catalog/01.jpg"
                                                    alt="Product"
                                                />
                                            </a>
                                        </Link>
                                        <div className="card-body py-2">
                                            <a
                                                className="product-meta d-block fs-xs pb-1"
                                                href="#"
                                            >
                                                Sneakers &amp; Keds
                                            </a>
                                            <h3 className="product-title fs-sm">
                                                <Link
                                                    passHref
                                                    href="/shop-single-v1"
                                                >
                                                    <a>
                                                        Women Colorblock
                                                        Sneakers
                                                    </a>
                                                </Link>
                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="product-price">
                                                    <span className="text-accent">
                                                        $154.<small>00</small>
                                                    </span>
                                                </div>
                                                <div className="star-rating">
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body card-body-hidden">
                                            <div className="text-center pb-2">
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size1"
                                                        id="s-75"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="s-75"
                                                    >
                                                        7.5
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size1"
                                                        id="s-80"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="s-80"
                                                    >
                                                        8
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size1"
                                                        id="s-85"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="s-85"
                                                    >
                                                        8.5
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size1"
                                                        id="s-90"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="s-90"
                                                    >
                                                        9
                                                    </label>
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-primary btn-sm d-block w-100 mb-2"
                                                type="button"
                                            >
                                                <i className="ci-cart fs-sm me-1"></i>
                                                Add to Cart
                                            </button>
                                            <div className="text-center">
                                                <a
                                                    className="nav-link-style fs-ms"
                                                    href="#quick-view"
                                                    data-bs-toggle="modal"
                                                >
                                                    <i className="ci-eye align-middle me-1"></i>
                                                    Quick view
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="d-sm-none" />
                                </div>
                                {/*<!-- Product-->*/}
                                <div className="col-md-4 col-sm-6 px-2 mb-4">
                                    <div className="card product-card">
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
                                        <Link href="/shop-single-v1" passHref>
                                            <a className="card-img-top d-block overflow-hidden">
                                                <img
                                                    src="/img/shop/catalog/02.jpg"
                                                    alt="Product"
                                                />
                                            </a>
                                        </Link>
                                        <div className="card-body py-2">
                                            <a
                                                className="product-meta d-block fs-xs pb-1"
                                                href="#"
                                            >
                                                Women’s T-shirt
                                            </a>
                                            <h3 className="product-title fs-sm">
                                                <Link
                                                    href="/shop-single-v1"
                                                    passHref
                                                >
                                                    <a>Cotton Lace Blouse</a>
                                                </Link>
                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="product-price">
                                                    <span className="text-accent">
                                                        $28.<small>50</small>
                                                    </span>
                                                    <del className="fs-sm text-muted">
                                                        38.<small>50</small>
                                                    </del>
                                                </div>
                                                <div className="star-rating">
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-half active"></i>
                                                    <i className="star-rating-icon ci-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body card-body-hidden">
                                            <div className="text-center pb-2">
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color1"
                                                        id="white"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="white"
                                                    >
                                                        <span
                                                            className="form-option-color rounded-circle"
                                                            style={{
                                                                backgroundColor:
                                                                    "#eaeaeb",
                                                            }}
                                                        ></span>
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color1"
                                                        id="blue"
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="blue"
                                                    >
                                                        <span
                                                            className="form-option-color rounded-circle"
                                                            style={{
                                                                backgroundColor:
                                                                    "#d1dceb",
                                                            }}
                                                        ></span>
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color1"
                                                        id="yellow"
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="yellow"
                                                    >
                                                        <span
                                                            className="form-option-color rounded-circle"
                                                            style={{
                                                                backgroundColor:
                                                                    "#f4e6a2",
                                                            }}
                                                        ></span>
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color1"
                                                        id="pink"
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="pink"
                                                    >
                                                        <span
                                                            className="form-option-color rounded-circle"
                                                            style={{
                                                                backgroundColor:
                                                                    "#f3dcff",
                                                            }}
                                                        ></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="d-flex mb-2">
                                                <select className="form-select form-select-sm me-2">
                                                    <option>XS</option>
                                                    <option>S</option>
                                                    <option>M</option>
                                                    <option>L</option>
                                                    <option>XL</option>
                                                </select>
                                                <button
                                                    className="btn btn-primary btn-sm"
                                                    type="button"
                                                >
                                                    <i className="ci-cart fs-sm me-1"></i>
                                                    Add to Cart
                                                </button>
                                            </div>
                                            <div className="text-center">
                                                <a
                                                    className="nav-link-style fs-ms"
                                                    href="#quick-view"
                                                    data-bs-toggle="modal"
                                                >
                                                    <i className="ci-eye align-middle me-1"></i>
                                                    Quick view
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="d-sm-none" />
                                </div>
                                {/*<!-- Product-->*/}
                                <div className="col-md-4 col-sm-6 px-2 mb-4">
                                    <div className="card product-card">
                                        <button
                                            className="btn-wishlist btn-sm"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title="Add to wishlist"
                                        >
                                            <i className="ci-heart"></i>
                                        </button>
                                        <Link href="/shop-single-v1" passHref>
                                            <a className="card-img-top d-block overflow-hidden">
                                                <img
                                                    src="/img/shop/catalog/03.jpg"
                                                    alt="Product"
                                                />
                                            </a>
                                        </Link>
                                        <div className="card-body py-2">
                                            <a
                                                className="product-meta d-block fs-xs pb-1"
                                                href="#"
                                            >
                                                Women’s Shorts
                                            </a>
                                            <h3 className="product-title fs-sm">
                                                <Link
                                                    href="/shop-single-v1"
                                                    passHref
                                                >
                                                    <a>Mom High Waist Shorts</a>
                                                </Link>
                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="product-price">
                                                    <span className="text-accent">
                                                        $39.<small>50</small>
                                                    </span>
                                                </div>
                                                <div className="star-rating">
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body card-body-hidden">
                                            <div className="text-center pb-2">
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size2"
                                                        id="xs"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="xs"
                                                    >
                                                        XS
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size2"
                                                        id="s"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="s"
                                                    >
                                                        S
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size2"
                                                        id="m"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="m"
                                                    >
                                                        M
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size2"
                                                        id="l"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="l"
                                                    >
                                                        L
                                                    </label>
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-primary btn-sm d-block w-100 mb-2"
                                                type="button"
                                            >
                                                <i className="ci-cart fs-sm me-1"></i>
                                                Add to Cart
                                            </button>
                                            <div className="text-center">
                                                <a
                                                    className="nav-link-style fs-ms"
                                                    href="#quick-view"
                                                    data-bs-toggle="modal"
                                                >
                                                    <i className="ci-eye align-middle me-1"></i>
                                                    Quick view
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="d-sm-none" />
                                </div>
                                {/*<!-- Product-->*/}
                                <div className="col-md-4 col-sm-6 px-2 mb-4">
                                    <div className="card product-card">
                                        <button
                                            className="btn-wishlist btn-sm"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title="Add to wishlist"
                                        >
                                            <i className="ci-heart"></i>
                                        </button>
                                        <Link href="/shop-single-v1" passHref>
                                            <a className="card-img-top d-block overflow-hidden">
                                                <img
                                                    src="/img/shop/catalog/04.jpg"
                                                    alt="Product"
                                                />
                                            </a>
                                        </Link>
                                        <div className="card-body py-2">
                                            <a
                                                className="product-meta d-block fs-xs pb-1"
                                                href="#"
                                            >
                                                Sportswear
                                            </a>
                                            <h3 className="product-title fs-sm">
                                                <Link
                                                    href="/shop-single-v1"
                                                    passHref
                                                >
                                                    <a>Women Sports Jacket</a>
                                                </Link>
                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="product-price">
                                                    <span className="text-accent">
                                                        $68.<small>40</small>
                                                    </span>
                                                </div>
                                                <div className="star-rating">
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body card-body-hidden">
                                            <div className="text-center pb-2">
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size3"
                                                        id="xs2"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="xs2"
                                                    >
                                                        XS
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size3"
                                                        id="s2"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="s2"
                                                    >
                                                        S
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size3"
                                                        id="m2"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="m2"
                                                    >
                                                        M
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size3"
                                                        id="l2"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="l2"
                                                    >
                                                        L
                                                    </label>
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-primary btn-sm d-block w-100 mb-2"
                                                type="button"
                                            >
                                                <i className="ci-cart fs-sm me-1"></i>
                                                Add to Cart
                                            </button>
                                            <div className="text-center">
                                                <a
                                                    className="nav-link-style fs-ms"
                                                    href="#quick-view"
                                                    data-bs-toggle="modal"
                                                >
                                                    <i className="ci-eye align-middle me-1"></i>
                                                    Quick view
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="d-sm-none" />
                                </div>
                                {/*<!-- Product-->*/}
                                <div className="col-md-4 col-sm-6 px-2 mb-4">
                                    <div className="card product-card">
                                        <button
                                            className="btn-wishlist btn-sm"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title="Add to wishlist"
                                        >
                                            <i className="ci-heart"></i>
                                        </button>
                                        <Link href="/shop-single-v1" passHref>
                                            <a className="card-img-top d-block overflow-hidden">
                                                <img
                                                    src="/img/shop/catalog/05.jpg"
                                                    alt="Product"
                                                />
                                            </a>
                                        </Link>
                                        <div className="card-body py-2">
                                            <a
                                                className="product-meta d-block fs-xs pb-1"
                                                href="#"
                                            >
                                                Men’s Sunglasses
                                            </a>
                                            <h3 className="product-title fs-sm">
                                                <Link
                                                    href="/shop-single-v1"
                                                    passHref
                                                >
                                                    <a>Polarized Sunglasses</a>
                                                </Link>
                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="product-price">
                                                    <span className="text-muted fs-sm">
                                                        Out of stock
                                                    </span>
                                                </div>
                                                <div className="star-rating">
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-half active"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body card-body-hidden">
                                            <Link
                                                href="/shop-single-v1"
                                                passHref
                                            >
                                                <a className="btn btn-secondary btn-sm d-block w-100 mb-2">
                                                    View details
                                                </a>
                                            </Link>
                                            <div className="text-center">
                                                <a
                                                    className="nav-link-style fs-ms"
                                                    href="#quick-view"
                                                    data-bs-toggle="modal"
                                                >
                                                    <i className="ci-eye align-middle me-1"></i>
                                                    Quick view
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="d-sm-none" />
                                </div>
                                {/*<!-- Product-->*/}
                                <div className="col-md-4 col-sm-6 px-2 mb-4">
                                    <div className="card product-card">
                                        <button
                                            className="btn-wishlist btn-sm"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title="Add to wishlist"
                                        >
                                            <i className="ci-heart"></i>
                                        </button>
                                        <Link href="/shop-single-v1" passHref>
                                            <a className="card-img-top d-block overflow-hidden">
                                                <img
                                                    src="/img/shop/catalog/06.jpg"
                                                    alt="Product"
                                                />
                                            </a>
                                        </Link>
                                        <div className="card-body py-2">
                                            <a
                                                className="product-meta d-block fs-xs pb-1"
                                                href="#"
                                            >
                                                Backpacks
                                            </a>
                                            <h3 className="product-title fs-sm">
                                                <Link
                                                    href="/shop-single-v1"
                                                    passHref
                                                >
                                                    <a>
                                                        TH Jeans City Backpack
                                                    </a>
                                                </Link>
                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="product-price">
                                                    <span className="text-accent">
                                                        $79.<small>50</small>
                                                    </span>
                                                </div>
                                                <div className="star-rating">
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star"></i>
                                                    <i className="star-rating-icon ci-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body card-body-hidden">
                                            <div className="text-center pb-2">
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color2"
                                                        id="khaki"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="khaki"
                                                    >
                                                        <span
                                                            className="form-option-color rounded-circle"
                                                            style={{
                                                                backgroundColor:
                                                                    "#97947c",
                                                            }}
                                                        ></span>
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color2"
                                                        id="jeans"
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="jeans"
                                                    >
                                                        <span
                                                            className="form-option-color rounded-circle"
                                                            style={{
                                                                backgroundColor:
                                                                    "#99a8be",
                                                            }}
                                                        ></span>
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color2"
                                                        id="white2"
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="white2"
                                                    >
                                                        <span
                                                            className="form-option-color rounded-circle"
                                                            style={{
                                                                backgroundColor:
                                                                    "#eaeaeb",
                                                            }}
                                                        ></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-primary btn-sm d-block w-100 mb-2"
                                                type="button"
                                            >
                                                <i className="ci-cart fs-sm me-1"></i>
                                                Add to Cart
                                            </button>
                                            <div className="text-center">
                                                <a
                                                    className="nav-link-style fs-ms"
                                                    href="#quick-view"
                                                    data-bs-toggle="modal"
                                                >
                                                    <i className="ci-eye align-middle me-1"></i>
                                                    Quick view
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Banner-->*/}
                            <div className="py-sm-2">
                                <div className="d-sm-flex justify-content-between align-items-center bg-secondary overflow-hidden mb-4 rounded-3">
                                    <div className="py-4 my-2 my-md-0 py-md-5 px-4 ms-md-3 text-center text-sm-start">
                                        <h4 className="fs-lg fw-light mb-2">
                                            Converse All Star
                                        </h4>
                                        <h3 className="mb-4">
                                            Make Your Day Comfortable
                                        </h3>
                                        <a
                                            className="btn btn-primary btn-shadow btn-sm"
                                            href="#"
                                        >
                                            Shop Now
                                        </a>
                                    </div>
                                    <img
                                        className="d-block ms-auto"
                                        src="/img/shop/catalog/banner.jpg"
                                        alt="Shop Converse"
                                    />
                                </div>
                            </div>
                            {/*<!-- Products grid-->*/}
                            <div className="row mx-n2">
                                {/*<!-- Product-->*/}
                                <div className="col-md-4 col-sm-6 px-2 mb-4">
                                    <div className="card product-card">
                                        <button
                                            className="btn-wishlist btn-sm"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title="Add to wishlist"
                                        >
                                            <i className="ci-heart"></i>
                                        </button>
                                        <Link href="/shop-single-v1" passHref>
                                            <a className="card-img-top d-block overflow-hidden">
                                                <img
                                                    src="/img/shop/catalog/07.jpg"
                                                    alt="Product"
                                                />
                                            </a>
                                        </Link>
                                        <div className="card-body py-2">
                                            <a
                                                className="product-meta d-block fs-xs pb-1"
                                                href="#"
                                            >
                                                Women Swimwear
                                            </a>
                                            <h3 className="product-title fs-sm">
                                                <Link
                                                    href="/shop-single-v1"
                                                    passHref
                                                >
                                                    <a>
                                                        Two-Piece Bikini in
                                                        Print
                                                    </a>
                                                </Link>
                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="product-price">
                                                    <span className="text-accent">
                                                        $18.<small>99</small>
                                                    </span>
                                                </div>
                                                <div className="star-rating">
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body card-body-hidden">
                                            <div className="text-center pb-2">
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size4"
                                                        id="xs3"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="xs3"
                                                    >
                                                        XS
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size4"
                                                        id="s3"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="s3"
                                                    >
                                                        S
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size4"
                                                        id="m3"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="m3"
                                                    >
                                                        M
                                                    </label>
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-primary btn-sm d-block w-100 mb-2"
                                                type="button"
                                            >
                                                <i className="ci-cart fs-sm me-1"></i>
                                                Add to Cart
                                            </button>
                                            <div className="text-center">
                                                <a
                                                    className="nav-link-style fs-ms"
                                                    href="#quick-view"
                                                    data-bs-toggle="modal"
                                                >
                                                    <i className="ci-eye align-middle me-1"></i>
                                                    Quick view
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="d-sm-none" />
                                </div>
                                {/*<!-- Product-->*/}
                                <div className="col-md-4 col-sm-6 px-2 mb-4">
                                    <div className="card product-card">
                                        <button
                                            className="btn-wishlist btn-sm"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title="Add to wishlist"
                                        >
                                            <i className="ci-heart"></i>
                                        </button>
                                        <Link href="/shop-single-v1" passHref>
                                            <a className="card-img-top d-block overflow-hidden">
                                                <img
                                                    src="/img/shop/catalog/08.jpg"
                                                    alt="Product"
                                                />
                                            </a>
                                        </Link>
                                        <div className="card-body py-2">
                                            <a
                                                className="product-meta d-block fs-xs pb-1"
                                                href="#"
                                            >
                                                Kid&#39;s Toys
                                            </a>
                                            <h3 className="product-title fs-sm">
                                                <Link
                                                    href="/shop-single-v1"
                                                    passHref
                                                >
                                                    <a>Soft Panda Teddy Bear</a>
                                                </Link>
                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="product-price">
                                                    <span className="text-accent">
                                                        $14.<small>99</small>
                                                    </span>
                                                </div>
                                                <div className="star-rating">
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body card-body-hidden">
                                            <button
                                                className="btn btn-primary btn-sm d-block w-100 mb-2"
                                                type="button"
                                            >
                                                <i className="ci-cart fs-sm me-1"></i>
                                                Add to Cart
                                            </button>
                                            <div className="text-center">
                                                <a
                                                    className="nav-link-style fs-ms"
                                                    href="#quick-view"
                                                    data-bs-toggle="modal"
                                                >
                                                    <i className="ci-eye align-middle me-1"></i>
                                                    Quick view
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="d-sm-none" />
                                </div>
                                {/*<!-- Product-->*/}
                                <div className="col-md-4 col-sm-6 px-2 mb-4">
                                    <div className="card product-card">
                                        <button
                                            className="btn-wishlist btn-sm"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title="Add to wishlist"
                                        >
                                            <i className="ci-heart"></i>
                                        </button>
                                        <Link href="/shop-single-v1" passHref>
                                            <a className="card-img-top d-block overflow-hidden">
                                                <img
                                                    src="/img/shop/catalog/09.jpg"
                                                    alt="Product"
                                                />
                                            </a>
                                        </Link>
                                        <div className="card-body py-2">
                                            <a
                                                className="product-meta d-block fs-xs pb-1"
                                                href="#"
                                            >
                                                Cosmetics
                                            </a>
                                            <h3 className="product-title fs-sm">
                                                <Link
                                                    href="/shop-single-v1"
                                                    passHref
                                                >
                                                    <a>
                                                        Metallic Lipstick
                                                        (Crimson)
                                                    </a>
                                                </Link>
                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="product-price">
                                                    <span className="text-accent">
                                                        $12.<small>99</small>
                                                    </span>
                                                </div>
                                                <div className="star-rating">
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-half active"></i>
                                                    <i className="star-rating-icon ci-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body card-body-hidden">
                                            <div className="text-center pb-2">
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color3"
                                                        id="crimson"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="crimson"
                                                    >
                                                        <span
                                                            className="form-option-color rounded-circle"
                                                            style={{
                                                                backgroundColor:
                                                                    "#bd3c82",
                                                            }}
                                                        ></span>
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color3"
                                                        id="creamy"
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="creamy"
                                                    >
                                                        <span
                                                            className="form-option-color rounded-circle"
                                                            style={{
                                                                backgroundColor:
                                                                    "#ebae81",
                                                            }}
                                                        ></span>
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color3"
                                                        id="palm"
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="palm"
                                                    >
                                                        <span
                                                            className="form-option-color rounded-circle"
                                                            style={{
                                                                backgroundColor:
                                                                    "#ca8799",
                                                            }}
                                                        ></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-primary btn-sm d-block w-100 mb-2"
                                                type="button"
                                            >
                                                <i className="ci-cart fs-sm me-1"></i>
                                                Add to Cart
                                            </button>
                                            <div className="text-center">
                                                <a
                                                    className="nav-link-style fs-ms"
                                                    href="#quick-view"
                                                    data-bs-toggle="modal"
                                                >
                                                    <i className="ci-eye align-middle me-1"></i>
                                                    Quick view
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="d-sm-none" />
                                </div>
                                {/*<!-- Product-->*/}
                                <div className="col-md-4 col-sm-6 px-2 mb-4">
                                    <div className="card product-card">
                                        <button
                                            className="btn-wishlist btn-sm"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title="Add to wishlist"
                                        >
                                            <i className="ci-heart"></i>
                                        </button>
                                        <Link href="/shop-single-v1" passHref>
                                            <a className="card-img-top d-block overflow-hidden">
                                                <img
                                                    src="/img/shop/catalog/10.jpg"
                                                    alt="Product"
                                                />
                                            </a>
                                        </Link>
                                        <div className="card-body py-2">
                                            <a
                                                className="product-meta d-block fs-xs pb-1"
                                                href="#"
                                            >
                                                Men’s Accessories
                                            </a>
                                            <h3 className="product-title fs-sm">
                                                <Link
                                                    href="/shop-single-v1"
                                                    passHref
                                                >
                                                    <a>
                                                        5-Pack Multicolor
                                                        Bracelets
                                                    </a>
                                                </Link>
                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="product-price">
                                                    <span className="text-accent">
                                                        $7.<small>99</small>
                                                    </span>
                                                </div>
                                                <div className="star-rating">
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body card-body-hidden">
                                            <button
                                                className="btn btn-primary btn-sm d-block w-100 mb-2"
                                                type="button"
                                            >
                                                <i className="ci-cart fs-sm me-1"></i>
                                                Add to Cart
                                            </button>
                                            <div className="text-center">
                                                <a
                                                    className="nav-link-style fs-ms"
                                                    href="#quick-view"
                                                    data-bs-toggle="modal"
                                                >
                                                    <i className="ci-eye align-middle me-1"></i>
                                                    Quick view
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="d-sm-none" />
                                </div>
                                {/*<!-- Product-->*/}
                                <div className="col-md-4 col-sm-6 px-2 mb-4">
                                    <div className="card product-card">
                                        <button
                                            className="btn-wishlist btn-sm"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title="Add to wishlist"
                                        >
                                            <i className="ci-heart"></i>
                                        </button>
                                        <Link href="/shop-single-v1" passHref>
                                            <a className="card-img-top d-block overflow-hidden">
                                                <img
                                                    src="/img/shop/catalog/11.jpg"
                                                    alt="Product"
                                                />
                                            </a>
                                        </Link>
                                        <div className="card-body py-2">
                                            <a
                                                className="product-meta d-block fs-xs pb-1"
                                                href="#"
                                            >
                                                Men’s Sandals
                                            </a>
                                            <h3 className="product-title fs-sm">
                                                <Link
                                                    href="/shop-single-v1"
                                                    passHref
                                                >
                                                    <a>Soft Footbed Sandals</a>
                                                </Link>
                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="product-price">
                                                    <span className="text-accent">
                                                        $99.<small>50</small>
                                                    </span>
                                                </div>
                                                <div className="star-rating">
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body card-body-hidden">
                                            <div className="text-center pb-2">
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color4"
                                                        id="blue2"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="blue2"
                                                    >
                                                        <span
                                                            className="form-option-color rounded-circle"
                                                            style={{
                                                                backgroundColor:
                                                                    "#879fb3",
                                                            }}
                                                        ></span>
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color4"
                                                        id="brown"
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="brown"
                                                    >
                                                        <span
                                                            className="form-option-color rounded-circle"
                                                            style={{
                                                                backgroundColor:
                                                                    "#9c6d4a",
                                                            }}
                                                        ></span>
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color4"
                                                        id="black"
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="black"
                                                    >
                                                        <span
                                                            className="form-option-color rounded-circle"
                                                            style={{
                                                                backgroundColor:
                                                                    "#333333",
                                                            }}
                                                        ></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="d-flex mb-2">
                                                <select className="form-select form-select-sm me-2">
                                                    <option>9.5</option>
                                                    <option>10</option>
                                                    <option>10.5</option>
                                                    <option>11</option>
                                                    <option>11.5</option>
                                                </select>
                                                <button
                                                    className="btn btn-primary btn-sm"
                                                    type="button"
                                                >
                                                    <i className="ci-cart fs-sm me-1"></i>
                                                    Add to Cart
                                                </button>
                                            </div>
                                            <div className="text-center">
                                                <a
                                                    className="nav-link-style fs-ms"
                                                    href="#quick-view"
                                                    data-bs-toggle="modal"
                                                >
                                                    <i className="ci-eye align-middle me-1"></i>
                                                    Quick view
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="d-sm-none" />
                                </div>
                                {/*<!-- Product-->*/}
                                <div className="col-md-4 col-sm-6 px-2 mb-4">
                                    <div className="card product-card">
                                        <button
                                            className="btn-wishlist btn-sm"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title="Add to wishlist"
                                        >
                                            <i className="ci-heart"></i>
                                        </button>
                                        <Link href="/shop-single-v1" passHref>
                                            <a className="card-img-top d-block overflow-hidden">
                                                <img
                                                    src="/img/shop/catalog/12.jpg"
                                                    alt="Product"
                                                />
                                            </a>
                                        </Link>
                                        <div className="card-body py-2">
                                            <a
                                                className="product-meta d-block fs-xs pb-1"
                                                href="#"
                                            >
                                                Men’s Hats
                                            </a>
                                            <h3 className="product-title fs-sm">
                                                <Link
                                                    href="/shop-single-v1"
                                                    passHref
                                                >
                                                    <a>3-Color Sun Stash Hat</a>
                                                </Link>
                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="product-price">
                                                    <span className="text-accent">
                                                        $25.<small>99</small>
                                                    </span>
                                                </div>
                                                <div className="star-rating">
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-half active"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body card-body-hidden">
                                            <div className="text-center pb-2">
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size5"
                                                        id="s4"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="s4"
                                                    >
                                                        S
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size5"
                                                        id="m4"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="m4"
                                                    >
                                                        M
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size5"
                                                        id="l4"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="l4"
                                                    >
                                                        L
                                                    </label>
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-primary btn-sm d-block w-100 mb-2"
                                                type="button"
                                            >
                                                <i className="ci-cart fs-sm me-1"></i>
                                                Add to Cart
                                            </button>
                                            <div className="text-center">
                                                <a
                                                    className="nav-link-style fs-ms"
                                                    href="#quick-view"
                                                    data-bs-toggle="modal"
                                                >
                                                    <i className="ci-eye align-middle me-1"></i>
                                                    Quick view
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="d-sm-none" />
                                </div>
                                {/*<!-- Product-->*/}
                                <div className="col-md-4 col-sm-6 px-2 mb-4">
                                    <div className="card product-card">
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
                                        <Link href="/shop-single-v1" passHref>
                                            <a className="card-img-top d-block overflow-hidden">
                                                <img
                                                    src="/img/shop/catalog/13.jpg"
                                                    alt="Product"
                                                />
                                            </a>
                                        </Link>
                                        <div className="card-body py-2">
                                            <a
                                                className="product-meta d-block fs-xs pb-1"
                                                href="#"
                                            >
                                                Men’s T-shirts
                                            </a>
                                            <h3 className="product-title fs-sm">
                                                <Link
                                                    href="/shop-single-v1"
                                                    passHref
                                                >
                                                    <a>
                                                        Cotton Polo Regular Fit
                                                    </a>
                                                </Link>
                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="product-price">
                                                    <span className="text-accent">
                                                        $11.<small>50</small>
                                                    </span>
                                                    <del className="fs-sm text-muted">
                                                        $13.<small>50</small>
                                                    </del>
                                                </div>
                                                <div className="star-rating">
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star"></i>
                                                    <i className="star-rating-icon ci-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body card-body-hidden">
                                            <div className="text-center pb-2">
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size6"
                                                        id="s5"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="s5"
                                                    >
                                                        S
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size6"
                                                        id="m5"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="m5"
                                                    >
                                                        M
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size6"
                                                        id="l5"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="l5"
                                                    >
                                                        L
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size6"
                                                        id="xl5"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="xl5"
                                                    >
                                                        XL
                                                    </label>
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-primary btn-sm d-block w-100 mb-2"
                                                type="button"
                                            >
                                                <i className="ci-cart fs-sm me-1"></i>
                                                Add to Cart
                                            </button>
                                            <div className="text-center">
                                                <a
                                                    className="nav-link-style fs-ms"
                                                    href="#quick-view"
                                                    data-bs-toggle="modal"
                                                >
                                                    <i className="ci-eye align-middle me-1"></i>
                                                    Quick view
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="d-sm-none" />
                                </div>
                                {/*<!-- Product-->*/}
                                <div className="col-md-4 col-sm-6 px-2 mb-4">
                                    <div className="card product-card">
                                        <button
                                            className="btn-wishlist btn-sm"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title="Add to wishlist"
                                        >
                                            <i className="ci-heart"></i>
                                        </button>
                                        <Link href="/shop-single-v1" passHref>
                                            <a className="card-img-top d-block overflow-hidden">
                                                <img
                                                    src="/img/shop/catalog/14.jpg"
                                                    alt="Product"
                                                />
                                            </a>
                                        </Link>

                                        <div className="card-body py-2">
                                            <a
                                                className="product-meta d-block fs-xs pb-1"
                                                href="#"
                                            >
                                                Men’s Jeans
                                            </a>
                                            <h3 className="product-title fs-sm">
                                                <Link
                                                    href="/shop-single-v1"
                                                    passHref
                                                >
                                                    <a>Slim Taper Fit Jeans</a>
                                                </Link>
                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="product-price">
                                                    <span className="text-accent">
                                                        $58.<small>99</small>
                                                    </span>
                                                </div>
                                                <div className="star-rating">
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body card-body-hidden">
                                            <div className="text-center pb-2">
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size7"
                                                        id="s6"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="s6"
                                                    >
                                                        S
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size7"
                                                        id="m6"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="m6"
                                                    >
                                                        M
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size7"
                                                        id="l6"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="l6"
                                                    >
                                                        L
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size7"
                                                        id="xl6"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="xl6"
                                                    >
                                                        XL
                                                    </label>
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-primary btn-sm d-block w-100 mb-2"
                                                type="button"
                                            >
                                                <i className="ci-cart fs-sm me-1"></i>
                                                Add to Cart
                                            </button>
                                            <div className="text-center">
                                                <a
                                                    className="nav-link-style fs-ms"
                                                    href="#quick-view"
                                                    data-bs-toggle="modal"
                                                >
                                                    <i className="ci-eye align-middle me-1"></i>
                                                    Quick view
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="d-sm-none" />
                                </div>
                                {/*<!-- Product-->*/}
                                <div className="col-md-4 col-sm-6 px-2 mb-4">
                                    <div className="card product-card">
                                        <button
                                            className="btn-wishlist btn-sm"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title="Add to wishlist"
                                        >
                                            <i className="ci-heart"></i>
                                        </button>
                                        <Link href="/shop-single-v1" passHref>
                                            <a className="card-img-top d-block overflow-hidden">
                                                <img
                                                    src="/img/shop/catalog/15.jpg"
                                                    alt="Product"
                                                />
                                            </a>
                                        </Link>
                                        <div className="card-body py-2">
                                            <a
                                                className="product-meta d-block fs-xs pb-1"
                                                href="#"
                                            >
                                                Men’s Waistcoats
                                            </a>
                                            <h3 className="product-title fs-sm">
                                                <Link
                                                    href="/shop-single-v1"
                                                    passHref
                                                >
                                                    <a>
                                                        Single-breasted
                                                        Trenchcoat
                                                    </a>
                                                </Link>
                                            </h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="product-price">
                                                    <span className="text-accent">
                                                        $79.<small>99</small>
                                                    </span>
                                                </div>
                                                <div className="star-rating">
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-filled active"></i>
                                                    <i className="star-rating-icon ci-star-half active"></i>
                                                    <i className="star-rating-icon ci-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body card-body-hidden">
                                            <div className="text-center pb-2">
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size8"
                                                        id="m7"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="m7"
                                                    >
                                                        M
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size8"
                                                        id="l7"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="l7"
                                                    >
                                                        L
                                                    </label>
                                                </div>
                                                <div className="form-check form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size8"
                                                        id="xl7"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="xl7"
                                                    >
                                                        XL
                                                    </label>
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-primary btn-sm d-block w-100 mb-2"
                                                type="button"
                                            >
                                                <i className="ci-cart fs-sm me-1"></i>
                                                Add to Cart
                                            </button>
                                            <div className="text-center">
                                                <a
                                                    className="nav-link-style fs-ms"
                                                    href="#quick-view"
                                                    data-bs-toggle="modal"
                                                >
                                                    <i className="ci-eye align-middle me-1"></i>
                                                    Quick view
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-3" />
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
