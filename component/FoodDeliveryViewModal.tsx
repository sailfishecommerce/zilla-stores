/* eslint-disable @next/next/no-img-element */

export default function FoodDeliveryViewModal() {
    return (
        <div
            className="modal-quick-view modal fade"
            id="quick-view"
            tabIndex={-1}
        >
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">
                            Pizza with Salami and Olives
                        </h4>
                        <button
                            className="btn-close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            {/*<!-- Product gallery-->*/}
                            <div className="col-lg-7 col-md-6 pe-lg-0">
                                <img
                                    src="/img/food-delivery/restaurants/single/large-preview.jpg"
                                    alt="Pizza"
                                />
                            </div>
                            {/*<!-- Product details-->*/}
                            <div className="col-lg-5 col-md-6 pt-4 pt-lg-0">
                                <div className="product-details ms-auto pb-3">
                                    <div className="mb-3">
                                        <span className="h3 fw-normal text-accent me-1">
                                            $15.<small>99</small>
                                        </span>
                                    </div>
                                    <form className="mb-grid-gutter">
                                        <div className="row mx-n2">
                                            <div className="col-6 px-2">
                                                <div className="mb-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="pizza-size"
                                                    >
                                                        Size:
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        id="pizza-size"
                                                    >
                                                        <option value="small">
                                                            Small
                                                        </option>
                                                        <option value="medium">
                                                            Medium
                                                        </option>
                                                        <option value="large">
                                                            Large
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-6 px-2">
                                                <div className="mb-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="pizza-base"
                                                    >
                                                        Base:
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        id="pizza-base"
                                                    >
                                                        <option value="standard">
                                                            Standard
                                                        </option>
                                                        <option value="thin">
                                                            Thin
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 d-flex align-items-center">
                                            <select
                                                className="form-select me-3"
                                                style={{ width: "5rem" }}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <button
                                                className="btn btn-primary btn-shadow d-block w-100"
                                                type="submit"
                                            >
                                                <i className="ci-cart fs-lg me-2"></i>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </form>
                                    <h5 className="h6 mb-3 pb-3 border-bottom">
                                        <i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2"></i>
                                        Product info
                                    </h5>
                                    <h6 className="fs-sm mb-2">Ingredients:</h6>
                                    <p className="fs-sm">
                                        Salami, Olives, Bell pepper, Mushrooms,
                                        Mozzarella, Parmesan
                                    </p>
                                    <h6 className="fs-sm mb-2">Allergies</h6>
                                    <p className="fs-sm">Gluten, Dairy</p>
                                    <h6 className="fs-sm mb-2">Calories</h6>
                                    <p className="fs-sm mb-0">811</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
