/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import FoodDeliveryLayout from "../layout/FoodDeliveryLayout";

export default function FoodDeliveryCategory() {
    return (
        <FoodDeliveryLayout title="Food delivery category">
            <>
                <section
                    className="bg-darker bg-size-cover bg-position-center py-5"
                    style={{
                        backgroundImage:
                            "url(img/food-delivery/category/pt-bg.jpg)",
                    }}
                >
                    <div className="container py-md-4">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                                <li className="breadcrumb-item">
                                    <Link href="/" passHref>
                                        <a className="text-nowrap">
                                            <i className="ci-home"></i>Home
                                        </a>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item text-nowrap">
                                    <a href="#">All categories</a>
                                </li>
                                <li
                                    className="breadcrumb-item text-nowrap active"
                                    aria-current="page"
                                >
                                    Burgers &amp; Fries
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-light text-center text-lg-start pt-3">
                            Burgers &amp; Fries
                        </h1>
                    </div>
                </section>
                {/*<!-- Categories-->*/}
                <section className="bg-secondary py-4">
                    <div className="container" data-simplebar>
                        <div className="d-flex justify-content-between">
                            <Link href="/food-delivery-category" passHref>
                                <a className="d-block py-3 pe-sm-3 pe-lg-5 me-5">
                                    <img
                                        className="d-block mx-auto mb-3"
                                        src="/img/food-delivery/icons/noodles.svg"
                                        width="60"
                                        alt="Noodles"
                                    />
                                    <h6 className="fs-base text-center text-nowrap">
                                        Noodles
                                    </h6>
                                </a>
                            </Link>
                            <Link href="/food-delivery-category" passHref>
                                <a className="d-block py-3 pe-sm-3 pe-lg-5 me-5">
                                    <img
                                        className="d-block mx-auto mb-3"
                                        src="/img/food-delivery/icons/pizza.svg"
                                        width="60"
                                        alt="Pizza &amp; Pasta"
                                    />
                                    <h6 className="fs-base text-center text-nowrap">
                                        Pizza &amp; Pasta
                                    </h6>
                                </a>
                            </Link>
                            <Link href="/food-delivery-category" passHref>
                                <a className="d-block py-3 pe-sm-3 pe-lg-5 me-5">
                                    <img
                                        className="d-block mx-auto mb-3"
                                        src="/img/food-delivery/icons/steak.svg"
                                        width="60"
                                        alt="Grill &amp; Steaks"
                                    />
                                    <h6 className="fs-base text-center text-nowrap">
                                        Grill &amp; Steaks
                                    </h6>
                                </a>
                            </Link>
                            <Link href="/food-delivery-category" passHref>
                                <a className="d-block py-3 pe-sm-3 pe-lg-5 me-5">
                                    <img
                                        className="d-block mx-auto mb-3"
                                        src="/img/food-delivery/icons/fish.svg"
                                        width="60"
                                        alt="Fish &amp; Seafood"
                                    />
                                    <h6 className="fs-base text-center text-nowrap">
                                        Fish &amp; Seafood
                                    </h6>
                                </a>
                            </Link>
                            <Link href="/food-delivery-category" passHref>
                                <a className="d-block py-3 pe-sm-3 pe-lg-5 me-5">
                                    <img
                                        className="d-block mx-auto mb-3"
                                        src="/img/food-delivery/icons/healthy.svg"
                                        width="60"
                                        alt="Healthy Food"
                                    />
                                    <h6 className="fs-base text-center text-nowrap">
                                        Healthy Food
                                    </h6>
                                </a>
                            </Link>
                            <Link href="/food-delivery-category" passHref>
                                <a className="d-block py-3 pe-sm-3 pe-lg-5 me-5">
                                    <img
                                        className="d-block mx-auto mb-3"
                                        src="/img/food-delivery/icons/cuisine.svg"
                                        width="60"
                                        alt="Haute Cuisine"
                                    />
                                    <h6 className="fs-base text-center text-nowrap">
                                        Haute Cuisine
                                    </h6>
                                </a>
                            </Link>
                            <Link href="/food-delivery-category" passHref>
                                <a className="d-block py-3 pe-sm-3 pe-lg-5 me-5">
                                    <img
                                        className="d-block mx-auto mb-3"
                                        src="/img/food-delivery/icons/chicken.svg"
                                        width="60"
                                        alt="Chicken &amp; Snaks"
                                    />
                                    <h6 className="fs-base text-center text-nowrap">
                                        Chicken &amp; Snaks
                                    </h6>
                                </a>
                            </Link>
                            <Link href="/food-delivery-category" passHref>
                                <a className="d-block py-3 pe-2">
                                    <img
                                        className="d-block mx-auto mb-3"
                                        src="/img/food-delivery/icons/coffee.svg"
                                        width="60"
                                        alt="Coffee &amp; Desserts"
                                    />
                                    <h6 className="fs-base text-center text-nowrap">
                                        Coffee &amp; Desserts
                                    </h6>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
                {/*<!-- Items grid-->*/}
                <section className="container py-4 py-sm-5">
                    <div className="row pt-3 pt-sm-0">
                        <div className="col-md-4 col-sm-6 mb-grid-gutter">
                            <Link href="/food-delivery-single" passHref>
                                <a className="card product-card h-100 border-0 shadow pb-2">
                                    <span
                                        className="badge badge-end badge-shadow bg-success fs-md fw-medium"
                                        data-bs-toggle="tooltip"
                                        title="Average meal cost"
                                    >
                                        AMC: $17.<small>00</small>
                                    </span>
                                    <img
                                        className="card-img-top"
                                        src="/img/food-delivery/restaurants/01.jpg"
                                        alt="McDonald&#39;s"
                                    />
                                    <div
                                        className="bg-white rounded-3 pt-1 px-2 mx-auto mt-n5"
                                        style={{ width: "175px" }}
                                    >
                                        <img
                                            className="d-block rounded-3 mx-auto"
                                            src="/img/food-delivery/restaurants/logos/01.png"
                                            width="150"
                                            alt="Brand"
                                        />
                                    </div>
                                    <div className="card-body text-center pt-3 pb-4">
                                        <h3 className="h5 mb-2">
                                            McDonald&#39;s
                                        </h3>
                                        <div className="fs-ms text-muted">
                                            Burgers, Salads, French fries,
                                            Drinks
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-grid-gutter">
                            <Link href="/food-delivery-single" passHref>
                                <a className="card product-card h-100 border-0 shadow pb-2">
                                    <span
                                        className="badge badge-end badge-shadow bg-info fs-md fw-medium"
                                        data-bs-toggle="tooltip"
                                        title="Average meal cost"
                                    >
                                        AMC: $25.<small>00</small>
                                    </span>
                                    <img
                                        className="card-img-top"
                                        src="/img/food-delivery/restaurants/02.jpg"
                                        alt="KFC"
                                    />
                                    <div
                                        className="bg-white rounded-3 pt-1 px-2 mx-auto mt-n5"
                                        style={{ width: "175px" }}
                                    >
                                        <img
                                            className="d-block rounded-3 mx-auto"
                                            src="/img/food-delivery/restaurants/logos/04.png"
                                            width="150"
                                            alt="Brand"
                                        />
                                    </div>
                                    <div className="card-body text-center pt-3 pb-4">
                                        <h3 className="h5 mb-2">
                                            Kentucky Fried Chicken
                                        </h3>
                                        <div className="fs-ms text-muted">
                                            Fried chicken, Burgers, Sandwiches,
                                            French fries
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-grid-gutter">
                            <Link href="/food-delivery-single" passHref>
                                <a className="card product-card h-100 border-0 shadow pb-2">
                                    <span
                                        className="badge badge-end badge-shadow bg-success fs-md fw-medium"
                                        data-bs-toggle="tooltip"
                                        title="Average meal cost"
                                    >
                                        AMC: $18.<small>00</small>
                                    </span>
                                    <img
                                        className="card-img-top"
                                        src="/img/food-delivery/restaurants/03.jpg"
                                        alt="Burger King"
                                    />
                                    <div
                                        className="bg-white rounded-3 pt-1 px-2 mx-auto mt-n5"
                                        style={{ width: "175px" }}
                                    >
                                        <img
                                            className="d-block rounded-3 mx-auto"
                                            src="/img/food-delivery/restaurants/logos/07.png"
                                            width="150"
                                            alt="Brand"
                                        />
                                    </div>
                                    <div className="card-body text-center pt-3 pb-4">
                                        <h3 className="h5 mb-2">Burger King</h3>
                                        <div className="fs-ms text-muted">
                                            Burgers, Salads, French fries,
                                            Drinks
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-grid-gutter">
                            <Link href="/food-delivery-single" passHref>
                                <a className="card product-card h-100 border-0 shadow pb-2">
                                    <span
                                        className="badge badge-end badge-shadow bg-info fs-md fw-medium"
                                        data-bs-toggle="tooltip"
                                        title="Average meal cost"
                                    >
                                        AMC: $27.<small>00</small>
                                    </span>
                                    <img
                                        className="card-img-top"
                                        src="/img/food-delivery/restaurants/04.jpg"
                                        alt="Logan&#39;s Roadhouse"
                                    />
                                    <div
                                        className="bg-white rounded-3 pt-1 px-2 mx-auto mt-n5"
                                        style={{ width: "175px" }}
                                    >
                                        <img
                                            className="d-block rounded-3 mx-auto"
                                            src="/img/food-delivery/restaurants/logos/06.png"
                                            width="150"
                                            alt="Brand"
                                        />
                                    </div>
                                    <div className="card-body text-center pt-3 pb-4">
                                        <h3 className="h5 mb-2">
                                            Logan&#39;s Roadhouse
                                        </h3>
                                        <div className="fs-ms text-muted">
                                            Grill, Steaks, Burgers, Salads,
                                            French fries, Drinks
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-grid-gutter">
                            <Link href="/food-delivery-single" passHref>
                                <a className="card product-card h-100 border-0 shadow pb-2">
                                    <span
                                        className="badge badge-end badge-shadow bg-danger fs-md fw-medium"
                                        data-bs-toggle="tooltip"
                                        title="Average meal cost"
                                    >
                                        AMC: $40.<small>00</small>
                                    </span>
                                    <img
                                        className="card-img-top"
                                        src="/img/food-delivery/restaurants/05.jpg"
                                        alt="Carrabba&#39;s"
                                    />
                                    <div
                                        className="bg-white rounded-3 pt-1 px-2 mx-auto mt-n5"
                                        style={{ width: "175px" }}
                                    >
                                        <img
                                            className="d-block rounded-3 mx-auto"
                                            src="/img/food-delivery/restaurants/logos/10.png"
                                            width="150"
                                            alt="Brand"
                                        />
                                    </div>
                                    <div className="card-body text-center pt-3 pb-4">
                                        <h3 className="h5 mb-2">
                                            Carrabba&#39;s
                                        </h3>
                                        <div className="fs-ms text-muted">
                                            Grill, Steaks, Burgers, Salads,
                                            French fries, Drinks
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-grid-gutter">
                            <Link href="/food-delivery-single" passHref>
                                <a className="card product-card h-100 border-0 shadow pb-2">
                                    <span
                                        className="badge badge-end badge-shadow bg-info fs-md fw-medium"
                                        data-bs-toggle="tooltip"
                                        title="Average meal cost"
                                    >
                                        AMC: $26.<small>00</small>
                                    </span>
                                    <img
                                        className="card-img-top"
                                        src="/img/food-delivery/restaurants/06.jpg"
                                        alt="Bonefish Grill"
                                    />
                                    <div
                                        className="bg-white rounded-3 pt-1 px-2 mx-auto mt-n5"
                                        style={{ width: "175px" }}
                                    >
                                        <img
                                            className="d-block rounded-3 mx-auto"
                                            src="/img/food-delivery/restaurants/logos/08.png"
                                            width="150"
                                            alt="Brand"
                                        />
                                    </div>
                                    <div className="card-body text-center pt-3 pb-4">
                                        <h3 className="h5 mb-2">
                                            Bonefish Grill
                                        </h3>
                                        <div className="fs-ms text-muted">
                                            Grill, Fish, Burgers, Salads, French
                                            fries, Drinks
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-grid-gutter">
                            <Link href="/food-delivery-single" passHref>
                                <a className="card product-card h-100 border-0 shadow pb-2">
                                    <span
                                        className="badge badge-end badge-shadow bg-success fs-md fw-medium"
                                        data-bs-toggle="tooltip"
                                        title="Average meal cost"
                                    >
                                        AMC: $19.<small>00</small>
                                    </span>
                                    <img
                                        className="card-img-top"
                                        src="/img/food-delivery/restaurants/07.jpg"
                                        alt="Domino&#39;s Pizza"
                                    />
                                    <div
                                        className="bg-white rounded-3 pt-1 px-2 mx-auto mt-n5"
                                        style={{ width: "175px" }}
                                    >
                                        <img
                                            className="d-block rounded-3 mx-auto"
                                            src="/img/food-delivery/restaurants/logos/02.png"
                                            width="150"
                                            alt="Brand"
                                        />
                                    </div>
                                    <div className="card-body text-center pt-3 pb-4">
                                        <h3 className="h5 mb-2">
                                            Domino&#39;s Pizza
                                        </h3>
                                        <div className="fs-ms text-muted">
                                            Pizza, Burgers, Salads, French
                                            fries, Drinks
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-grid-gutter">
                            <Link href="/food-delivery-single" passHref>
                                <a className="card product-card h-100 border-0 shadow pb-2">
                                    <span
                                        className="badge badge-end badge-shadow bg-success fs-md fw-medium"
                                        data-bs-toggle="tooltip"
                                        title="Average meal cost"
                                    >
                                        AMC: $17.<small>00</small>
                                    </span>
                                    <img
                                        className="card-img-top"
                                        src="/img/food-delivery/restaurants/08.jpg"
                                        alt="Hardee&#39;s"
                                    />
                                    <div
                                        className="bg-white rounded-3 pt-1 px-2 mx-auto mt-n5"
                                        style={{ width: "175px" }}
                                    >
                                        <img
                                            className="d-block rounded-3 mx-auto"
                                            src="/img/food-delivery/restaurants/logos/13.png"
                                            width="150"
                                            alt="Brand"
                                        />
                                    </div>
                                    <div className="card-body text-center pt-3 pb-4">
                                        <h3 className="h5 mb-2">
                                            Hardee&#39;s
                                        </h3>
                                        <div className="fs-ms text-muted">
                                            Burgers, Salads, French fries,
                                            Drinks
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-grid-gutter">
                            <Link href="/food-delivery-single" passHref>
                                <a className="card product-card h-100 border-0 shadow pb-2">
                                    <span
                                        className="badge badge-end badge-shadow bg-danger fs-md fw-medium"
                                        data-bs-toggle="tooltip"
                                        title="Average meal cost"
                                    >
                                        AMC: $34.<small>00</small>
                                    </span>
                                    <img
                                        className="card-img-top"
                                        src="/img/food-delivery/restaurants/09.jpg"
                                        alt="Ruth&#39;s Chris Steak House"
                                    />
                                    <div
                                        className="bg-white rounded-3 pt-1 px-2 mx-auto mt-n5"
                                        style={{ width: "175px" }}
                                    >
                                        <img
                                            className="d-block rounded-3 mx-auto"
                                            src="/img/food-delivery/restaurants/logos/09.png"
                                            width="150"
                                            alt="Brand"
                                        />
                                    </div>
                                    <div className="card-body text-center pt-3 pb-4">
                                        <h3 className="h5 mb-2">
                                            Ruth&#39;s Chris Steak House
                                        </h3>
                                        <div className="fs-ms text-muted">
                                            Grill, Steaks, Burgers, Salads,
                                            French fries, Drinks
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        </FoodDeliveryLayout>
    );
}
