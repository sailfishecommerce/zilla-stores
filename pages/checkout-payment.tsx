/* eslint-disable @next/next/no-img-element */
import FashionLayout from "../layout/FashionLayout";

export default function BlogList() {
    return (
        <FashionLayout title="Blog list">
			<>
      <div className="page-title-overlap bg-dark pt-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item"><a className="text-nowrap" href="/"><i className="ci-home"></i>Home</a></li>
                <li className="breadcrumb-item text-nowrap"><a href="/shop-grid-ls">Shop</a>
                </li>
                <li className="breadcrumb-item text-nowrap active" aria-current="page">Checkout</li>
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
<Link
	href="/shop-cart"
passHref>
							<a className="step-item active"
							>
                <div className="step-progress"><span className="step-count">1</span></div>
                <div className="step-label"><i className="ci-cart"></i>Cart</div></a>
								</Link>
<Link
	href="/checkout-details"
passHref>
								<a className="step-item active"
								>
                <div className="step-progress"><span className="step-count">2</span></div>
                <div className="step-label"><i className="ci-user-circle"></i>Details</div></a>
								</Link>
<Link
	href="/checkout-shipping"
passHref>
								<a className="step-item active"
								>
                <div className="step-progress"><span className="step-count">3</span></div>
                <div className="step-label"><i className="ci-package"></i>Shipping</div></a>
								</Link>
<Link
	href="/checkout-payment"
passHref>
								<a className="step-item active current"
								>
                <div className="step-progress"><span className="step-count">4</span></div>
                <div className="step-label"><i className="ci-card"></i>Payment</div></a>
								</Link>
<Link
	href="/checkout-review"
passHref>
								<a className="step-item"
								>
                <div className="step-progress"><span className="step-count">5</span></div>
                <div className="step-label"><i className="ci-check-circle"></i>Review</div></a>
								</Link></div>
            {/*<!-- Payment methods accordion-->*/}
            <h2 className="h6 pb-3 mb-2">Choose payment method</h2>
            <div className="accordion mb-2" id="payment-method">
              <div className="accordion-item">
                <h3 className="accordion-header"><a className="accordion-button" href="#card" data-bs-toggle="collapse"><i className="ci-card fs-lg me-2 mt-n1 align-middle"></i>Pay with Credit Card</a></h3>
                <div className="accordion-collapse collapse show" id="card" data-bs-parent="#payment-method">
                  <div className="accordion-body">
                    <p className="fs-sm">We accept following credit cards:&nbsp;&nbsp;<img className="d-inline-block align-middle" src="/img/cards.png" width="187" alt="Cerdit Cards" /></p>
                    <div className="credit-card-wrapper"></div>
                    <form className="credit-card-form row">
                      <div className="mb-3 col-sm-6">
                        <input className="form-control" type="text" name="number" placeholder="Card Number" required />
                      </div>
                      <div className="mb-3 col-sm-6">
                        <input className="form-control" type="text" name="name" placeholder="Full Name" required />
                      </div>
                      <div className="mb-3 col-sm-3">
                        <input className="form-control" type="text" name="expiry" placeholder="MM/YY" required />
                      </div>
                      <div className="mb-3 col-sm-3">
                        <input className="form-control" type="text" name="cvc" placeholder="CVC" required />
                      </div>
                      <div className="col-sm-6">
                        <button className="btn btn-outline-primary d-block w-100 mt-0" type="submit">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header"><a className="accordion-button collapsed" href="#paypal" data-bs-toggle="collapse"><i className="ci-paypal me-2 align-middle"></i>Pay with PayPal</a></h3>
                <div className="accordion-collapse collapse" id="paypal" data-bs-parent="#payment-method">
                  <div className="accordion-body fs-sm">
                    <p><span className='fw-medium'>PayPal</span> - the safer, easier way to pay</p>
                    <form className="row needs-validation" method="post" noValidate>
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <input className="form-control" type="email" placeholder="E-mail" required />
                          <div className="invalid-feedback">Please enter valid email address</div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <input className="form-control" type="password" placeholder="Password" required />
                          <div className="invalid-feedback">Please enter your password</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex flex-wrap justify-content-between align-items-center"><a className="nav-link-style" href="#">Forgot password?</a>
                          <button className="btn btn-primary" type="submit">Log In</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header"><a className="accordion-button collapsed" href="#points" data-bs-toggle="collapse"><i className="ci-gift me-2"></i>Redeem Reward Points</a></h3>
                <div className="accordion-collapse collapse" id="points" data-bs-parent="#payment-method">
                  <div className="accordion-body">
                    <p>You currently have<span className="fw-medium">&nbsp;384</span>&nbsp;Reward Points to spend.</p>
                    <div className="form-check d-block">
                      <input className="form-check-input" type="checkbox" id="use_points">
                      <label className="form-check-label" htmlFor="use_points">Use my Reward Points to pay for this order.</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- Navigation (desktop)-->*/}
            <div className="d-none d-lg-flex pt-4">
              <div className="w-50 pe-3"><a className="btn btn-secondary d-block w-100" href="/checkout-shipping"><i className="ci-arrow-left mt-sm-0 me-1"></i><span className="d-none d-sm-inline">Back to Shipping</span><span className="d-inline d-sm-none">Back</span></a></div>
              <div className="w-50 ps-2"><a className="btn btn-primary d-block w-100" href="/checkout-review"><span className="d-none d-sm-inline">Review your order</span><span className="d-inline d-sm-none">Review order</span><i className="ci-arrow-right mt-sm-0 ms-1"></i></a></div>
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
	href="/shop-single-v1"
passHref>
										<a className="d-block flex-shrink-0"
										><img src="/img/shop/cart/widget/01.jpg" width="64" alt="Product" /></a>
										</Link>
                    <div className="ps-2">
                      <h6 className="widget-product-title">
												<Link
													href="/shop-single-v1"
												passHref>
												<a
												>Women Colorblock Sneakers</a>
												</Link>
												</h6>
                      <div className="widget-product-meta"><span className="text-accent me-2">$150.<small>00</small></span><span className="text-muted">x 1</span></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center py-2 border-bottom">
<Link
	href="/shop-single-v1"
passHref>
										<a className="d-block flex-shrink-0"
										><img src="/img/shop/cart/widget/02.jpg" width="64" alt="Product" /></a>
										</Link>
                    <div className="ps-2">
                      <h6 className="widget-product-title">
												<Link
													href="/shop-single-v1"
												passHref>
												<a
												>TH Jeans City Backpack</a>
												</Link>
												</h6>
                      <div className="widget-product-meta"><span className="text-accent me-2">$79.<small>50</small></span><span className="text-muted">x 1</span></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center py-2 border-bottom">
<Link
	href="/shop-single-v1"
passHref>
										<a className="d-block flex-shrink-0"
										><img src="/img/shop/cart/widget/03.jpg" width="64" alt="Product" /></a>
										</Link>
                    <div className="ps-2">
                      <h6 className="widget-product-title">
											<Link
												href="/shop-single-v1"
											passHref>
												<a
												>3-Color Sun Stash Hat</a>
												</Link>
												</h6>
                      <div className="widget-product-meta"><span className="text-accent me-2">$22.<small>50</small></span><span className="text-muted">x 1</span></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center py-2 border-bottom">
<Link
	href="/shop-single-v1"
passHref>
										<a className="d-block flex-shrink-0"
										><img src="/img/shop/cart/widget/04.jpg" width="64" alt="Product" /></a>
										</Link>
                    <div className="ps-2">
                      <h6 className="widget-product-title">
<Link
	href="/shop-single-v1"
passHref>
												<a
												>Cotton Polo Regular Fit</a>
												</Link>
												</h6>
                      <div className="widget-product-meta"><span className="text-accent me-2">$9.<small>00</small></span><span className="text-muted">x 1</span></div>
                    </div>
                  </div>
                </div>
                <ul className="list-unstyled fs-sm pb-2 border-bottom">
                  <li className="d-flex justify-content-between align-items-center"><span className="me-2">Subtotal:</span><span className="text-end">$265.<small>00</small></span></li>
                  <li className="d-flex justify-content-between align-items-center"><span className="me-2">Shipping:</span><span className="text-end">—</span></li>
                  <li className="d-flex justify-content-between align-items-center"><span className="me-2">Taxes:</span><span className="text-end">$9.<small>50</small></span></li>
                  <li className="d-flex justify-content-between align-items-center"><span className="me-2">Discount:</span><span className="text-end">—</span></li>
                </ul>
                <h3 className="fw-normal text-center my-4">$274.<small>50</small></h3>
                <form className="needs-validation" method="post" noValidate>
                  <div className="mb-3">
                    <input className="form-control" type="text" placeholder="Promo code" required />
                    <div className="invalid-feedback">Please provide promo code.</div>
                  </div>
                  <button className="btn btn-outline-primary d-block w-100" type="submit">Apply promo code</button>
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
								<Link
									href="/checkout-shipping"
								passHref>
								<a className="btn btn-secondary d-block w-100"
								><i className="ci-arrow-left mt-sm-0 me-1"></i><span className="d-none d-sm-inline">Back to Shipping</span><span className="d-inline d-sm-none">Back</span></a>
								</L
								</div>
              <div className="w-50 ps-2">
								<Link
									href="/checkout-review"
								passHref>
								<a className="btn btn-primary d-block w-100"
								><span className="d-none d-sm-inline">Review your order</span><span className="d-inline d-sm-none">Review order</span><i className="ci-arrow-right mt-sm-0 ms-1"></i></a>
								</L
								</div>
            </div>
          </div>
        </div>
      </div>
		</>
  	</FashionLayout>
  );
}
