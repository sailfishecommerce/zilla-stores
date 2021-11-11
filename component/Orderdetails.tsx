/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Orderdetails() {
    return (
        <>
            <h2 className="h6 pt-1 pb-3 mb-3 border-bottom">
                Review your order
            </h2>
            <div className="d-sm-flex justify-content-between my-4 pb-3 border-bottom">
                <div className="d-sm-flex text-center text-sm-start">
                    <Link href="/shop-single-v1" passHref>
                        <a className="d-inline-block flex-shrink-0 mx-auto me-sm-4">
                            <img
                                src="/img/shop/cart/01.jpg"
                                width="160"
                                alt="Product"
                            />
                        </a>
                    </Link>
                    <div className="pt-2">
                        <h3 className="product-title fs-base mb-2">
                            <Link href="/shop-single-v1" passHref>
                                <a>Women Colorblock Sneakers</a>
                            </Link>
                        </h3>
                        <div className="fs-sm">
                            <span className="text-muted me-2">Size:</span>
                            8.5
                        </div>
                        <div className="fs-sm">
                            <span className="text-muted me-2">Color:</span>
                            White &amp; Blue
                        </div>
                        <div className="fs-lg text-accent pt-2">
                            $154.<small>00</small>
                        </div>
                    </div>
                </div>
                <div
                    className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-end"
                    style={{ maxWidth: "9rem" }}
                >
                    <p className="mb-0">
                        <span className="text-muted fs-sm">Quantity:</span>
                        <span>&nbsp;1</span>
                    </p>
                    <button className="btn btn-link px-0" type="button">
                        <i className="ci-edit me-2"></i>
                        <span className="fs-sm">Edit</span>
                    </button>
                </div>
            </div>
            {/*<!-- Item-->*/}
            <div className="d-sm-flex justify-content-between my-4 pb-3 border-bottom">
                <div className="d-sm-flex text-center text-sm-start">
                    <Link href="/shop-single-v1" passHref>
                        <a className="d-inline-block flex-shrink-0 mx-auto me-sm-4">
                            <img
                                src="/img/shop/cart/02.jpg"
                                width="160"
                                alt="Product"
                            />
                        </a>
                    </Link>
                    <div className="pt-2">
                        <h3 className="product-title fs-base mb-2">
                            <Link href="/shop-single-v1" passHref>
                                <a>TH Jeans City Backpack</a>
                            </Link>
                        </h3>
                        <div className="fs-sm">
                            <span className="text-muted me-2">Brand:</span>
                            Tommy Hilfiger
                        </div>
                        <div className="fs-sm">
                            <span className="text-muted me-2">Color:</span>
                            Khaki
                        </div>
                        <div className="fs-lg text-accent pt-2">
                            $79.<small>50</small>
                        </div>
                    </div>
                </div>
                <div
                    className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-end"
                    style={{ maxWidth: "9rem" }}
                >
                    <p className="mb-0">
                        <span className="text-muted fs-sm">Quantity:</span>
                        <span>&nbsp;1</span>
                    </p>
                    <button className="btn btn-link px-0" type="button">
                        <i className="ci-edit me-2"></i>
                        <span className="fs-sm">Edit</span>
                    </button>
                </div>
            </div>
            <div className="d-sm-flex justify-content-between my-4 pb-3 border-bottom">
                <div className="d-sm-flex text-center text-sm-start">
                    <Link href="/shop-single-v1" passHref>
                        <a className="d-inline-block flex-shrink-0 mx-auto me-sm-4">
                            <img
                                src="/img/shop/cart/03.jpg"
                                width="160"
                                alt="Product"
                            />
                        </a>
                    </Link>
                    <div className="pt-2">
                        <h3 className="product-title fs-base mb-2">
                            <Link href="/shop-single-v1" passHref>
                                <a>3-Color Sun Stash Hat</a>
                            </Link>
                        </h3>
                        <div className="fs-sm">
                            <span className="text-muted me-2">Brand:</span>
                            The North Face
                        </div>
                        <div className="fs-sm">
                            <span className="text-muted me-2">Color:</span>
                            Pink / Beige / Dark blue
                        </div>
                        <div className="fs-lg text-accent pt-2">
                            $22.<small>50</small>
                        </div>
                    </div>
                </div>
                <div
                    className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-end"
                    style={{ maxWidth: "9rem" }}
                >
                    <p className="mb-0">
                        <span className="text-muted fs-sm">Quantity:</span>
                        <span>&nbsp;1</span>
                    </p>
                    <button className="btn btn-link px-0" type="button">
                        <i className="ci-edit me-2"></i>
                        <span className="fs-sm">Edit</span>
                    </button>
                </div>
            </div>
            <div className="d-sm-flex justify-content-between my-4 pb-3 border-bottom">
                <div className="d-sm-flex text-center text-sm-start">
                    <Link href="/shop-single-v1" passHref>
                        <a className="d-inline-block flex-shrink-0 mx-auto me-sm-4">
                            <img
                                src="/img/shop/cart/04.jpg"
                                width="160"
                                alt="Product"
                            />
                        </a>
                    </Link>
                    <div className="pt-2">
                        <h3 className="product-title fs-base mb-2">
                            <Link href="/shop-single-v1" passHref>
                                <a>Cotton Polo Regular Fit</a>
                            </Link>
                        </h3>
                        <div className="fs-sm">
                            <span className="text-muted me-2">Size:</span>
                            42
                        </div>
                        <div className="fs-sm">
                            <span className="text-muted me-2">Color:</span>
                            Light blue
                        </div>
                        <div className="fs-lg text-accent pt-2">
                            $9.<small>00</small>
                        </div>
                    </div>
                </div>
                <div
                    className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-end"
                    style={{ maxWidth: "9rem" }}
                >
                    <p className="mb-0">
                        <span className="text-muted fs-sm">Quantity:</span>
                        <span>&nbsp;1</span>
                    </p>
                    <button className="btn btn-link px-0" type="button">
                        <i className="ci-edit me-2"></i>
                        <span className="fs-sm">Edit</span>
                    </button>
                </div>
            </div>
        </>
    );
}
