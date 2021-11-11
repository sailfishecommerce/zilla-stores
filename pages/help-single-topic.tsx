/* eslint-disable @next/next/no-img-element */
import FashionLayout from "../layout/FashionLayout";

export default function HelpSingleTopic() {
    return (
        <FashionLayout title="Help single top">
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
                                        <a href="help-topics.html">
                                            Help center
                                        </a>
                                    </li>
                                    <li
                                        className="breadcrumb-item text-nowrap active"
                                        aria-current="page"
                                    >
                                        Single topic
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                            <h1 className="h3 mb-0">Single topic</h1>
                        </div>
                    </div>
                </div>
                <div className="container py-5 mt-md-2 mb-2">
                    <div className="row">
                        <div className="col-lg-3">
                            <div
                                className="offcanvas offcanvas-collapse border-end"
                                id="help-sidebar"
                            >
                                <div className="offcanvas-header align-items-center shadow-sm">
                                    <h2 className="h5 mb-0">
                                        Related articles
                                    </h2>
                                    <button
                                        className="btn-close ms-auto"
                                        type="button"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div
                                    className="offcanvas-body py-grid-gutter py-lg-1"
                                    data-simplebar
                                    data-simplebar-auto-hide="true"
                                >
                                    <div className="widget widget-links">
                                        <h3 className="widget-title d-none d-lg-block">
                                            Related articles
                                        </h3>
                                        <ul className="widget-list">
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Managing account
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Working with dashboard
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Available payment methods
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Delivery information
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Order tracking instructions
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Refund policy
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Offers and discounts
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Reward points
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Affiliate program
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    After purchase support
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Service terms &amp;
                                                    conditions
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Most popular questions
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <h2 className="h4 pb-3">
                                Available payment methods when checkout
                            </h2>
                            <p className="fs-md">
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
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore.
                            </p>
                            <p className="fs-md">
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum. Sed
                                ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo
                                inventore.
                            </p>
                            <div className="row pt-3 pb-4 mb-2 mb-md-4">
                                <div className="col-md-7">
                                    <img
                                        className="w-100 img-thumbnail"
                                        src="/img/pages/help-article.jpg"
                                        style={{ maxWidth: "508px" }}
                                        alt="Help image"
                                    />
                                </div>
                                <div className="col-md-5 pt-4">
                                    <h3 className="h6">
                                        Pros of our payment options
                                    </h3>
                                    <ul className="list-unstyled fs-sm pt-2">
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="ci-check text-success me-2"></i>
                                            <span>
                                                Ut enim ad minima veniam, quis
                                                nostrum
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="ci-check text-success me-2"></i>
                                            <span>
                                                At vero eos et accusamus et
                                                iusto odio
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="ci-check text-success me-2"></i>
                                            <span>
                                                Nam libero tempore, cum soluta
                                                nobis
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="ci-check text-success me-2"></i>
                                            <span>
                                                Et harum quidem rerum facilis
                                                est et expedita
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="ci-check text-success me-2"></i>
                                            <span>
                                                Quis autem vel eum iure
                                                reprehenderit
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="ci-check text-success me-2"></i>
                                            <span>
                                                Excepteur sint occaecat
                                                cupidatat non
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h2 className="h4 pb-3">Methods detail</h2>
                            <div
                                className="accordion accordion-flush"
                                id="methods"
                            >
                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <a
                                            className="accordion-button"
                                            href="#methodOne"
                                            role="button"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="methodOne"
                                        >
                                            Credit / debit cards
                                        </a>
                                    </h3>
                                    <div
                                        className="accordion-collapse collapse show"
                                        id="methodOne"
                                        data-bs-parent="#methods"
                                    >
                                        <div className="card-body fs-md">
                                            <p>
                                                At vero eos et accusamus et
                                                iusto odio dignissimos ducimus
                                                qui blanditiis praesentium
                                                voluptatum deleniti atque
                                                corrupti quos dolores et quas
                                                molestias excepturi sint
                                                occaecati cupiditate non
                                                provident, similique sunt in
                                                culpa qui officia deserunt
                                                mollitia animi, id est laborum
                                                et dolorum fuga.
                                            </p>
                                            <p>
                                                Sed ut perspiciatis unde omnis
                                                iste natus error sit voluptatem
                                                accusantium doloremque
                                                laudantium, totam rem aperiam,
                                                eaque ipsa quae ab illo
                                                inventore veritatis et quasi
                                                architecto beatae vitae dicta
                                                sunt explicabo. Nemo enim ipsam
                                                voluptatem quia voluptas sit
                                                aspernatur aut odit aut fugit,
                                                sed quia consequuntur magni
                                                dolores eos qui ratione
                                                voluptatem sequi nesciunt. Neque
                                                porro quisquam est, qui dolorem
                                                ipsum quia dolor sit amet,
                                                consectetur, adipisci velit, sed
                                                quia non numquam eius modi
                                                tempora incidunt ut labore et
                                                dolore.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <a
                                            className="accordion-button collapsed"
                                            href="#methodTwo"
                                            role="button"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="methodTwo"
                                        >
                                            Pay with PayPal
                                        </a>
                                    </h3>
                                    <div
                                        className="accordion-collapse collapse"
                                        id="methodTwo"
                                        data-bs-parent="#methods"
                                    >
                                        <div className="card-body fs-md">
                                            <p>
                                                At vero eos et accusamus et
                                                iusto odio dignissimos ducimus
                                                qui blanditiis praesentium
                                                voluptatum deleniti atque
                                                corrupti quos dolores et quas
                                                molestias excepturi sint
                                                occaecati cupiditate non
                                                provident, similique sunt in
                                                culpa qui officia deserunt
                                                mollitia animi, id est laborum
                                                et dolorum fuga.
                                            </p>
                                            <p>
                                                Sed ut perspiciatis unde omnis
                                                iste natus error sit voluptatem
                                                accusantium doloremque
                                                laudantium, totam rem aperiam,
                                                eaque ipsa quae ab illo
                                                inventore veritatis et quasi
                                                architecto beatae vitae dicta
                                                sunt explicabo. Nemo enim ipsam
                                                voluptatem quia voluptas sit
                                                aspernatur aut odit aut fugit,
                                                sed quia consequuntur magni
                                                dolores eos qui ratione
                                                voluptatem sequi nesciunt. Neque
                                                porro quisquam est, qui dolorem
                                                ipsum quia dolor sit amet,
                                                consectetur, adipisci velit, sed
                                                quia non numquam eius modi
                                                tempora incidunt ut labore et
                                                dolore.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header"></h3>
                                    <a
                                        className="accordion-button collapsed"
                                        href="#methodThree"
                                        role="button"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                        aria-controls="methodThree"
                                    >
                                        Redeem reward points
                                    </a>
                                    <div
                                        className="accordion-collapse collapse"
                                        id="methodThree"
                                        data-bs-parent="#methods"
                                    >
                                        <div className="card-body fs-md">
                                            <p>
                                                At vero eos et accusamus et
                                                iusto odio dignissimos ducimus
                                                qui blanditiis praesentium
                                                voluptatum deleniti atque
                                                corrupti quos dolores et quas
                                                molestias excepturi sint
                                                occaecati cupiditate non
                                                provident, similique sunt in
                                                culpa qui officia deserunt
                                                mollitia animi, id est laborum
                                                et dolorum fuga.
                                            </p>
                                            <p>
                                                Sed ut perspiciatis unde omnis
                                                iste natus error sit voluptatem
                                                accusantium doloremque
                                                laudantium, totam rem aperiam,
                                                eaque ipsa quae ab illo
                                                inventore veritatis et quasi
                                                architecto beatae vitae dicta
                                                sunt explicabo. Nemo enim ipsam
                                                voluptatem quia voluptas sit
                                                aspernatur aut odit aut fugit,
                                                sed quia consequuntur magni
                                                dolores eos qui ratione
                                                voluptatem sequi nesciunt. Neque
                                                porro quisquam est, qui dolorem
                                                ipsum quia dolor sit amet,
                                                consectetur, adipisci velit, sed
                                                quia non numquam eius modi
                                                tempora incidunt ut labore et
                                                dolore.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section className="container text-center pt-5 mt-2">
                                <h2 className="h4 pb-3">
                                    Haven&#39;t found the answer? We can help.
                                </h2>
                                <i className="ci-help h3 text-primary d-block mb-4"></i>
                                <a
                                    className="btn btn-primary"
                                    href="help-submit-request.html"
                                >
                                    Submit a request
                                </a>
                                <p className="fs-sm pt-4">
                                    Contact us and we’ll get back to you as soon
                                    as possible.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </>
        </FashionLayout>
    );
}
