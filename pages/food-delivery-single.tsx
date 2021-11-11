/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import FoodDeliveryLayout from "../layout/FoodDeliveryLayout";

export default function foodDeliverySingle() {
    return (
        <FoodDeliveryLayout title="Food delivery single view">
            <>
                <section
                    className="bg-darker bg-size-cover bg-position-center py-5"
                    style={{
                        backgroundImage:
                            "url(img/food-delivery/restaurants/single/pt-bg.jpg)",
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
                                    <a href="#">Restaurants</a>
                                </li>
                                <li
                                    className="breadcrumb-item text-nowrap active"
                                    aria-current="page"
                                >
                                    Domino&#39;s Pizza
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-light text-center text-lg-start py-3">
                            Domino&#39;s Pizza
                        </h1>
                    </div>
                </section>
                {/*<!-- Page navigation-->*/}
                <nav className="container mt-n5">
                    <div className="d-flex align-items-center bg-white rounded-3 shadow-lg py-2 ps-sm-2 pe-4 pe-lg-2">
                        <img
                            className="d-block rounded-3"
                            src="/img/food-delivery/restaurants/logos/02.png"
                            width="150"
                            alt="Brand"
                        />
                        <div className="ps-lg-3 w-100 text-end">
                            {/*<!-- For desktop-->*/}
                            <ul className="nav nav-tabs d-none d-lg-flex border-0 mb-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                        Pizza
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Sides
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Drinks
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Dessert
                                    </a>
                                </li>
                            </ul>
                            {/*<!-- For mobile-->*/}
                            <div className="btn-group dropdown d-lg-none ms-auto">
                                <button
                                    className="btn btn-primary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="ci-menu fs-base me-2"></i>Menu
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a
                                        className="dropdown-item fs-base active"
                                        href="#"
                                    >
                                        Pizza{" "}
                                    </a>
                                    <a
                                        className="dropdown-item fs-base"
                                        href="#"
                                    >
                                        Sides{" "}
                                    </a>
                                    <a
                                        className="dropdown-item fs-base"
                                        href="#"
                                    >
                                        Drinks{" "}
                                    </a>
                                    <a
                                        className="dropdown-item fs-base"
                                        href="#"
                                    >
                                        Dessert{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/*<!-- Menu (Products grid)-->*/}
                <section className="container tab-content py-4 py-sm-5">
                    <h2 className="text-center pt-2 pt-sm-0 mb-sm-5">Pizza</h2>
                    <div className="row pt-3 pt-sm-0">
                        {/*<!-- Item-->*/}
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
                            <div className="card product-card border pb-2">
                                <a
                                    className="d-block"
                                    href="#quick-view"
                                    data-bs-toggle="modal"
                                >
                                    <img
                                        className="card-img-top"
                                        src="/img/food-delivery/restaurants/single/01.jpg"
                                        alt="Pizza"
                                    />
                                </a>
                                <div className="card-body pt-1 pb-2">
                                    <h3 className="product-title fs-md">
                                        <a
                                            href="#quick-view"
                                            data-bs-toggle="modal"
                                        >
                                            Pizza Vegano Delux
                                        </a>
                                    </h3>
                                    <p className="fs-ms text-muted">
                                        Broccoli, Mushrooms, Bell pepper, Corn,
                                        Onion, Mozzarella, Parmesan
                                    </p>
                                    <div className="d-flex mb-1">
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size1"
                                                id="s1"
                                                checked
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="s1"
                                            >
                                                Small
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size1"
                                                id="m1"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="m1"
                                            >
                                                Medium
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size1"
                                                id="l1"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="l1"
                                            >
                                                Large
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="base1"
                                                id="standard1"
                                                checked
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="standard1"
                                            >
                                                Standard
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="base1"
                                                id="thin1"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="thin1"
                                            >
                                                Thin
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $12.99
                                            </span>
                                        </div>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- Item-->*/}
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
                            <div className="card product-card border pb-2">
                                <a
                                    className="d-block"
                                    href="#quick-view"
                                    data-bs-toggle="modal"
                                >
                                    <img
                                        className="card-img-top"
                                        src="/img/food-delivery/restaurants/single/02.jpg"
                                        alt="Pizza"
                                    />
                                </a>
                                <div className="card-body pt-1 pb-2">
                                    <h3 className="product-title fs-md">
                                        <a
                                            href="#quick-view"
                                            data-bs-toggle="modal"
                                        >
                                            Pizza Peperoni with Tomatoes
                                        </a>
                                    </h3>
                                    <p className="fs-ms text-muted">
                                        Pepperoni, Tomatoes, Paprika, Chili,
                                        Mozzarella, Parmesan
                                    </p>
                                    <div className="d-flex mb-1">
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size2"
                                                id="s2"
                                                checked
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="s2"
                                            >
                                                Small
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size2"
                                                id="m2"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="m2"
                                            >
                                                Medium
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size2"
                                                id="l2"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="l2"
                                            >
                                                Large
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="base2"
                                                id="standard2"
                                                checked
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="standard2"
                                            >
                                                Standard
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="base2"
                                                id="thin2"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="thin2"
                                            >
                                                Thin
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $14.99
                                            </span>
                                        </div>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- Item-->*/}
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
                            <div className="card product-card border pb-2">
                                <a
                                    className="d-block"
                                    href="#quick-view"
                                    data-bs-toggle="modal"
                                >
                                    <img
                                        className="card-img-top"
                                        src="/img/food-delivery/restaurants/single/03.jpg"
                                        alt="Pizza"
                                    />
                                </a>
                                <div className="card-body pt-1 pb-2">
                                    <h3 className="product-title fs-md">
                                        <a
                                            href="#quick-view"
                                            data-bs-toggle="modal"
                                        >
                                            Pizza with Salami and Olives
                                        </a>
                                    </h3>
                                    <p className="fs-ms text-muted">
                                        Salami, Olives, Bell pepper, Mushrooms,
                                        Mozzarella, Parmesan
                                    </p>
                                    <div className="d-flex mb-1">
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size3"
                                                id="s3"
                                                checked
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="s3"
                                            >
                                                Small
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size3"
                                                id="m3"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="m3"
                                            >
                                                Medium
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size3"
                                                id="l3"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="l3"
                                            >
                                                Large
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="base3"
                                                id="standard3"
                                                checked
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="standard3"
                                            >
                                                Standard
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="base3"
                                                id="thin3"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="thin3"
                                            >
                                                Thin
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $15.99
                                            </span>
                                        </div>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- Item-->*/}
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
                            <div className="card product-card border pb-2">
                                <a
                                    className="d-block"
                                    href="#quick-view"
                                    data-bs-toggle="modal"
                                >
                                    <img
                                        className="card-img-top"
                                        src="/img/food-delivery/restaurants/single/04.jpg"
                                        alt="Pizza"
                                    />
                                </a>
                                <div className="card-body pt-1 pb-2">
                                    <h3 className="product-title fs-md">
                                        <a
                                            href="#quick-view"
                                            data-bs-toggle="modal"
                                        >
                                            Pizza Quattro Formaggi
                                        </a>
                                    </h3>
                                    <p className="fs-ms text-muted">
                                        Mozzarella, Parmesan, Monterey Jack,
                                        Pecorino Romano, Asiago
                                    </p>
                                    <div className="d-flex mb-1">
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size4"
                                                id="s4"
                                                checked
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="s4"
                                            >
                                                Small
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size4"
                                                id="m4"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="m4"
                                            >
                                                Medium
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size4"
                                                id="l4"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="l4"
                                            >
                                                Large
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="base4"
                                                id="standard4"
                                                checked
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="standard4"
                                            >
                                                Standard
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="base4"
                                                id="thin4"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="thin4"
                                            >
                                                Thin
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $14.99
                                            </span>
                                        </div>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- Item-->*/}
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
                            <div className="card product-card border pb-2">
                                <a
                                    className="d-block"
                                    href="#quick-view"
                                    data-bs-toggle="modal"
                                >
                                    <img
                                        className="card-img-top"
                                        src="/img/food-delivery/restaurants/single/05.jpg"
                                        alt="Pizza"
                                    />
                                </a>
                                <div className="card-body pt-1 pb-2">
                                    <h3 className="product-title fs-md">
                                        <a
                                            href="#quick-view"
                                            data-bs-toggle="modal"
                                        >
                                            Pizza Margherita
                                        </a>
                                    </h3>
                                    <p className="fs-ms text-muted">
                                        Mozzarella, Parmesan, Basil, Fresh
                                        tomatoes, Tomato sauce
                                    </p>
                                    <div className="d-flex mb-1">
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size5"
                                                id="s5"
                                                checked
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="s5"
                                            >
                                                Small
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size5"
                                                id="m5"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="m5"
                                            >
                                                Medium
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size5"
                                                id="l5"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="l5"
                                            >
                                                Large
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="base5"
                                                id="standard5"
                                                checked
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="standard5"
                                            >
                                                Standard
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="base5"
                                                id="thin5"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="thin5"
                                            >
                                                Thin
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $10.99
                                            </span>
                                        </div>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- Item-->*/}
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
                            <div className="card product-card border pb-2">
                                <a
                                    className="d-block"
                                    href="#quick-view"
                                    data-bs-toggle="modal"
                                >
                                    <img
                                        className="card-img-top"
                                        src="/img/food-delivery/restaurants/single/06.jpg"
                                        alt="Pizza"
                                    />
                                </a>
                                <div className="card-body pt-1 pb-2">
                                    <h3 className="product-title fs-md">
                                        <a
                                            href="#quick-view"
                                            data-bs-toggle="modal"
                                        >
                                            Pizza with Minced Meat
                                        </a>
                                    </h3>
                                    <p className="fs-ms text-muted">
                                        Minced meat, Bacon, Jalapeño,
                                        Mozzarella, Parmesan, Olives, Tomatoes
                                    </p>
                                    <div className="d-flex mb-1">
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size6"
                                                id="s6"
                                                checked
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="s6"
                                            >
                                                Small
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size6"
                                                id="m6"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="m6"
                                            >
                                                Medium
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size6"
                                                id="l6"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="l6"
                                            >
                                                Large
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="base6"
                                                id="standard6"
                                                checked
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="standard6"
                                            >
                                                Standard
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="base6"
                                                id="thin6"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="thin6"
                                            >
                                                Thin
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $15.99
                                            </span>
                                        </div>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- Item-->*/}
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
                            <div className="card product-card border pb-2">
                                <a
                                    className="d-block"
                                    href="#quick-view"
                                    data-bs-toggle="modal"
                                >
                                    <img
                                        className="card-img-top"
                                        src="/img/food-delivery/restaurants/single/07.jpg"
                                        alt="Pizza"
                                    />
                                </a>
                                <div className="card-body pt-1 pb-2">
                                    <h3 className="product-title fs-md">
                                        <a
                                            href="#quick-view"
                                            data-bs-toggle="modal"
                                        >
                                            Pizza Hot Salami
                                        </a>
                                    </h3>
                                    <p className="fs-ms text-muted">
                                        Salami, Chilli, Jalapeño, Mozzarella,
                                        Parmesan, Tomato sauce
                                    </p>
                                    <div className="d-flex mb-1">
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size7"
                                                id="s7"
                                                checked
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="s7"
                                            >
                                                Small
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size7"
                                                id="m7"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="m7"
                                            >
                                                Medium
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size7"
                                                id="l7"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="l7"
                                            >
                                                Large
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="base7"
                                                id="standard7"
                                                checked
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="standard7"
                                            >
                                                Standard
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="base7"
                                                id="thin7"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="thin7"
                                            >
                                                Thin
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $14.99
                                            </span>
                                        </div>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- Item-->*/}
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
                            <div className="card product-card border pb-2">
                                <a
                                    className="d-block"
                                    href="#quick-view"
                                    data-bs-toggle="modal"
                                >
                                    <img
                                        className="card-img-top"
                                        src="/img/food-delivery/restaurants/single/08.jpg"
                                        alt="Pizza"
                                    />
                                </a>
                                <div className="card-body pt-1 pb-2">
                                    <h3 className="product-title fs-md">
                                        <a
                                            href="#quick-view"
                                            data-bs-toggle="modal"
                                        >
                                            Pizza with Grilled Meat
                                        </a>
                                    </h3>
                                    <p className="fs-ms text-muted">
                                        Grilled meat, Tomatoes, Bell pepper,
                                        Onion, Mozzarella, Parmesan
                                    </p>
                                    <div className="d-flex mb-1">
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size8"
                                                id="s8"
                                                checked
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="s8"
                                            >
                                                Small
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size8"
                                                id="m8"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="m8"
                                            >
                                                Medium
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size8"
                                                id="l8"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="l8"
                                            >
                                                Large
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="base8"
                                                id="standard8"
                                                checked
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="standard8"
                                            >
                                                Standard
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-justified mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="base8"
                                                id="thin8"
                                            />
                                            <label
                                                className="form-option-label"
                                                htmlFor="thin8"
                                            >
                                                Thin
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $16.99
                                            </span>
                                        </div>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- Load more button-->*/}
                    <nav
                        className="d-md-flex justify-content-between align-items-center text-center text-md-start pt-2 pb-4 mb-md-2"
                        aria-label="Page navigation"
                    >
                        <div className="d-md-flex align-items-center w-100">
                            <span className="fs-sm text-muted me-md-3">
                                Showing 8 of 24 items
                            </span>
                            <div
                                className="progress w-100 my-3 mx-auto mx-md-0"
                                style={{ maxWidth: "10rem", height: "4px" }}
                            >
                                <div
                                    className="progress-bar bg-dark"
                                    role="progressbar"
                                    style={{ width: "18%" }}
                                    aria-valuenow={18}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                ></div>
                            </div>
                        </div>
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                        >
                            Load more items
                        </button>
                    </nav>
                </section>
            </>
        </FoodDeliveryLayout>
    );
}
