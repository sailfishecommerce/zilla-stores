/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import FashionLayout from "../layout/FashionLayout";

export default function CheckoutComplete() {
  return (
    <FashionLayout title="Checkout | Completed">
      <>
        <div className="page-title-overlap bg-dark pt-4">
          <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
            <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
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
                    <Link href="/shop-grid-ls" passHref>
                      <a>Shop</a>
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item text-nowrap active"
                    aria-current="page"
                  >
                    Checkout
                  </li>
                </ol>
              </nav>
            </div>
            <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
              <h1 className="h3 text-light mb-0">Checkout</h1>
            </div>
          </div>
        </div>
        <div className="container pb-5 mb-2 mb-md-4">
          <div className="row">
            <section className="col-lg-8">
              {/*<!-- Steps-->*/}
              <div className="steps steps-light pt-2 pb-3 mb-5">
                <Link href="/shop-cart" passHref>
                  <a className="step-item active">
                    <div className="step-progress">
                      <span className="step-count">1</span>
                    </div>
                    <div className="step-label">
                      <i className="ci-cart"></i>Cart
                    </div>
                  </a>
                </Link>
                <Link href="/checkout-details" passHref>
                  <a className="step-item active current">
                    <div className="step-progress">
                      <span className="step-count">2</span>
                    </div>
                    <div className="step-label">
                      <i className="ci-user-circle"></i>
                      Details
                    </div>
                  </a>
                </Link>
                <Link href="/checkout-shipping" passHref>
                  <a className="step-item">
                    <div className="step-progress">
                      <span className="step-count">3</span>
                    </div>
                    <div className="step-label">
                      <i className="ci-package"></i>
                      Shipping
                    </div>
                  </a>
                </Link>
                <Link href="/checkout-payment" passHref>
                  <a className="step-item">
                    <div className="step-progress">
                      <span className="step-count">4</span>
                    </div>
                    <div className="step-label">
                      <i className="ci-card"></i>Payment
                    </div>
                  </a>
                </Link>
                <Link href="/checkout-review" passHref>
                  <a className="step-item">
                    <div className="step-progress">
                      <span className="step-count">5</span>
                    </div>
                    <div className="step-label">
                      <i className="ci-check-circle"></i>
                      Review
                    </div>
                  </a>
                </Link>
              </div>
              {/*<!-- Autor info-->*/}
              <div className="d-sm-flex justify-content-between align-items-center bg-secondary p-4 rounded-3 mb-grid-gutter">
                <div className="d-flex align-items-center">
                  <div className="img-thumbnail rounded-circle position-relative flex-shrink-0">
                    <span
                      className="badge bg-warning position-absolute end-0 mt-n2"
                      data-bs-toggle="tooltip"
                      title="Reward points"
                    >
                      384
                    </span>
                    <img
                      className="rounded-circle"
                      src="/img/shop/account/avatar.jpg"
                      width="90"
                      alt="Susan Gardner"
                    />
                  </div>
                  <div className="ps-3">
                    <h3 className="fs-base mb-0">Susan Gardner</h3>
                    <span className="text-accent fs-sm">
                      s.gardner@example.com
                    </span>
                  </div>
                </div>
                <Link href="/account-profile" passHref>
                  <a className="btn btn-light btn-sm btn-shadow mt-3 mt-sm-0">
                    <i className="ci-edit me-2"></i>Edit profile
                  </a>
                </Link>
              </div>
              {/*<!-- Shipping address-->*/}
              <h2 className="h6 pt-1 pb-3 mb-3 border-bottom">
                Shipping address
              </h2>
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="checkout-fn">
                      First Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="checkout-fn"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="checkout-ln">
                      Last Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="checkout-ln"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="checkout-email">
                      E-mail Address
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="checkout-email"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="checkout-phone">
                      Phone Number
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="checkout-phone"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="checkout-company">
                      Company
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="checkout-company"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="checkout-country">
                      Country
                    </label>
                    <select className="form-select" id="checkout-country">
                      <option>Choose country</option>
                      <option>Australia</option>
                      <option>Canada</option>
                      <option>France</option>
                      <option>Germany</option>
                      <option>Switzerland</option>
                      <option>USA</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="checkout-city">
                      Country
                    </label>
                    <select className="form-select" id="checkout-city">
                      <option>Choose city</option>
                      <option>Amsterdam</option>
                      <option>Berlin</option>
                      <option>Geneve</option>
                      <option>New York</option>
                      <option>Paris</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="checkout-zip">
                      ZIP Code
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="checkout-zip"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="checkout-address-1">
                      Address 1
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="checkout-address-1"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="checkout-address-2">
                      Address 2
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="checkout-address-2"
                    />
                  </div>
                </div>
              </div>
              <h6 className="mb-3 py-3 border-bottom">Billing address</h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked
                  id="same-address"
                />
                <label className="form-check-label" htmlFor="same-address">
                  Same as shipping address
                </label>
              </div>
              {/*<!-- Navigation (desktop)-->*/}
              <div className="d-none d-lg-flex pt-4 mt-3">
                <div className="w-50 pe-3">
                  <Link href="/shop-cart" passHref>
                    <a className="btn btn-secondary d-block w-100">
                      <i className="ci-arrow-left mt-sm-0 me-1"></i>
                      <span className="d-none d-sm-inline">Back to Cart</span>
                      <span className="d-inline d-sm-none">Back</span>
                    </a>
                  </Link>
                </div>
                <div className="w-50 ps-2">
                  <Link href="/checkout-shipping" passHref>
                    <a className="btn btn-primary d-block w-100">
                      <span className="d-none d-sm-inline">
                        Proceed to Shipping
                      </span>
                      <span className="d-inline d-sm-none">Next</span>
                      <i className="ci-arrow-right mt-sm-0 ms-1"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </section>
            {/*<!-- Sidebar-->*/}
            <aside className="col-lg-4 pt-4 pt-lg-0 ps-xl-5">
              <div className="bg-white rounded-3 shadow-lg p-4 ms-lg-auto">
                <div className="py-2 px-xl-2">
                  <div className="widget mb-3">
                    <h2 className="widget-title text-center">Order summary</h2>
                    <div className="d-flex align-items-center pb-2 border-bottom">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a className="d-block flex-shrink-0">
                          <img
                            src="/img/shop
										/cart/widget/01.jpg"
                            width="64"
                            alt="Product"
                          />
                        </a>
                      </Link>

                      <div className="ps-2">
                        <h6 className="widget-product-title">
                          <Link
                            href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                            passHref
                          >
                            <a>Women Colorblock Sneakers</a>
                          </Link>
                        </h6>
                        <div className="widget-product-meta">
                          <span className="text-accent me-2">
                            $150.<small>00</small>
                          </span>
                          <span className="text-muted">x 1</span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center py-2 border-bottom">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a className="d-block flex-shrink-0">
                          <img
                            src="/img/shop/cart/widget/02.jpg"
                            width="64"
                            alt="Product"
                          />
                        </a>
                      </Link>
                      <div className="ps-2">
                        <h6 className="widget-product-title">
                          <Link
                            href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                            passHref
                          >
                            <a>TH Jeans City Backpack</a>
                          </Link>
                        </h6>
                        <div className="widget-product-meta">
                          <span className="text-accent me-2">
                            $79.<small>50</small>
                          </span>
                          <span className="text-muted">x 1</span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center py-2 border-bottom">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a className="d-block flex-shrink-0">
                          <img
                            src="/img/shop/cart/widget/03.jpg"
                            width="64"
                            alt="Product"
                          />
                        </a>
                      </Link>
                      <div className="ps-2">
                        <h6 className="widget-product-title">
                          <Link
                            href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                            passHref
                          >
                            <a>3-Color Sun Stash Hat</a>
                          </Link>
                        </h6>
                        <div className="widget-product-meta">
                          <span className="text-accent me-2">
                            $22.<small>50</small>
                          </span>
                          <span className="text-muted">x 1</span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center py-2 border-bottom">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a className="d-block flex-shrink-0">
                          <img
                            src="/img/shop/cart/widget/04.jpg"
                            width="64"
                            alt="Product"
                          />
                        </a>
                      </Link>
                      <div className="ps-2">
                        <h6 className="widget-product-title">
                          <Link
                            href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                            passHref
                          >
                            <a>Cotton Polo Regular Fit</a>
                          </Link>
                        </h6>
                        <div className="widget-product-meta">
                          <span className="text-accent me-2">
                            $9.<small>00</small>
                          </span>
                          <span className="text-muted">x 1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="list-unstyled fs-sm pb-2 border-bottom">
                    <li className="d-flex justify-content-between align-items-center">
                      <span className="me-2">Subtotal:</span>
                      <span className="text-end">
                        $265.<small>00</small>
                      </span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <span className="me-2">Shipping:</span>
                      <span className="text-end">—</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <span className="me-2">Taxes:</span>
                      <span className="text-end">
                        $9.<small>50</small>
                      </span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <span className="me-2">Discount:</span>
                      <span className="text-end">—</span>
                    </li>
                  </ul>
                  <h3 className="fw-normal text-center my-4">
                    $274.<small>50</small>
                  </h3>
                  <form className="needs-validation" method="post" noValidate>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Promo code"
                        required
                      />
                      <div className="invalid-feedback">
                        Please provide promo code.
                      </div>
                    </div>
                    <button
                      className="btn btn-outline-primary d-block w-100"
                      type="submit"
                    >
                      Apply promo code
                    </button>
                  </form>
                </div>
              </div>
            </aside>
          </div>
          {/*<!-- Navigation (mobile)-->*/}
          <div className="row d-lg-none">
            <div className="col-lg-8">
              <div className="d-flex pt-4 mt-3">
                <div className="w-50 pe-3">
                  <Link href="/shop-cart" passHref>
                    <a className="btn btn-secondary d-block w-100">
                      <i className="ci-arrow-left mt-sm-0 me-1"></i>
                      <span className="d-none d-sm-inline">Back to Cart</span>
                      <span className="d-inline d-sm-none">Back</span>
                    </a>
                  </Link>
                </div>
                <div className="w-50 ps-2">
                  <Link href="/checkout-shipping" passHref>
                    <a className="btn btn-primary d-block w-100">
                      <span className="d-none d-sm-inline">
                        Proceed to Shipping
                      </span>
                      <span className="d-inline d-sm-none">Next</span>
                      <i className="ci-arrow-right mt-sm-0 ms-1"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </FashionLayout>
  );
}
