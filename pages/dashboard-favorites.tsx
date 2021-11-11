import DashboardLayout from "../layout/DashboardLayout"

export default function DashboardFavorites() {
	return (
		<DashboardLayout title="dashboard favourite">
      <div className="container mb-5 pb-3">
        <div className="bg-light shadow-lg rounded-3 overflow-hidden">
          <div className="row">
            {/*<!-- Sidebar-->*/}
            <aside className="col-lg-4 pe-xl-5">
              {/*<!-- Account menu toggler (hidden on screens larger 992px)-->*/}
              <div className="d-block d-lg-none p-4"><a className="btn btn-outline-accent d-block" href="#account-menu" data-bs-toggle="collapse"><i className="ci-menu me-2"></i>Account menu</a></div>
              {/*<!-- Actual menu-->*/}
              <div className="h-100 border-end mb-2">
                <div className="d-lg-block collapse" id="account-menu">
                  <div className="bg-secondary p-4">
                    <h3 className="fs-sm mb-0 text-muted">Account</h3>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-settings.html"><i className="ci-settings opacity-60 me-2"></i>Settings</a></li>
                    <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-purchases.html"><i className="ci-basket opacity-60 me-2"></i>Purchases</a></li>
                    <li className="mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3 active" href="dashboard-favorites.html"><i className="ci-heart opacity-60 me-2"></i>Favorites<span className="fs-sm text-muted ms-auto">4</span></a></li>
                  </ul>
                  <div className="bg-secondary p-4">
                    <h3 className="fs-sm mb-0 text-muted">Seller Dashboard</h3>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-sales.html"><i className="ci-dollar opacity-60 me-2"></i>Sales<span className="fs-sm text-muted ms-auto">$1,375.00</span></a></li>
                    <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-products.html"><i className="ci-package opacity-60 me-2"></i>Products<span className="fs-sm text-muted ms-auto">5</span></a></li>
                    <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-add-new-product.html"><i className="ci-cloud-upload opacity-60 me-2"></i>Add New Product</a></li>
                    <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-payouts.html"><i className="ci-currency-exchange opacity-60 me-2"></i>Payouts</a></li>
                    <li className="mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-signin.html"><i className="ci-sign-out opacity-60 me-2"></i>Sign out</a></li>
                  </ul>
                  <hr />
                </div>
              </div>
            </aside>
            {/*<!-- Content-->*/}
            <section className="col-lg-8 pt-lg-4 pb-4 mb-3">
              <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                <h2 className="h3 pt-2 pb-4 mb-0 text-center text-sm-start border-bottom">Favorites<span className="badge bg-faded-accent fs-sm text-body align-middle ms-2">4</span></h2>
                {/*<!-- Product-->*/}
                <div className="d-block d-sm-flex align-items-center py-4 border-bottom"><a className="d-block position-relative mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto" href="marketplace-single.html" style={{width: "12.5rem"}}><img className="rounded-3" src="/img/marketplace/products/th02.jpg" alt="Product"/><span className="btn btn-icon btn-danger position-absolute top-0 end-0 py-0 px-1 m-2" data-bs-toggle="tooltip" title="Remove from Favorites"><i className="ci-trash"></i></span></a>
                  <div className="text-center text-sm-start">
                    <h3 className="h6 product-title mb-2"><a href="marketplace-single.html">UI Isometric Devices Pack (PSD)</a></h3>
                    <div className="d-inline-block text-accent">$23.<small>00</small></div><a className="d-inline-block text-accent fs-ms border-start ms-2 ps-2" href="marketplace-vendor.html">by uidesigner</a>
                    <div className="d-sm-flex align-items-center pt-2">
                      <select className="form-select form-select-sm my-1 me-2">
                        <option>Standard license</option>
                        <option>Extended license</option>
                      </select>
                      <button className="btn btn-primary btn-sm mx-auto mx-sm-0 my-2" type="button"><i className="ci-cart me-1"></i>Add to Cart</button>
                    </div>
                  </div>
                </div>
                {/*<!-- Product-->*/}
                <div className="d-block d-sm-flex align-items-center py-4 border-bottom"><a className="d-block position-relative mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto" href="marketplace-single.html" style={{width: "12.5rem"}}><img className="rounded-3" src="/img/marketplace/products/th06.jpg" alt="Product" /><span className="btn btn-icon btn-danger position-absolute top-0 end-0 py-0 px-1 m-2" data-bs-toggle="tooltip" title="Remove from Favorites"><i className="ci-trash"></i></span></a>
                  <div className="text-center text-sm-start">
                    <h3 className="h6 product-title mb-2"><a href="marketplace-single.html">Project Devices Showcase (PSD)</a></h3>
                    <div className="d-inline-block text-accent">$18.<small>00</small></div><a className="d-inline-block text-accent fs-ms border-start ms-2 ps-2" href="marketplace-vendor.html">by pixels</a>
                    <div className="d-sm-flex align-items-center pt-2">
                      <select className="form-select form-select-sm my-1 me-2">
                        <option>Standard license</option>
                        <option>Extended license</option>
                      </select>
                      <button className="btn btn-primary btn-sm mx-auto mx-sm-0 my-2" type="button"><i className="ci-cart me-1"></i>Add to Cart</button>
                    </div>
                  </div>
                </div>
                {/*<!-- Product-->*/}
                <div className="d-block d-sm-flex align-items-center py-4 border-bottom"><a className="d-block position-relative mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto" href="marketplace-single.html" style={{width: "12.5rem"}}><img className="rounded-3" src="/img/marketplace/products/th01.jpg" alt="Product" /><span className="btn btn-icon btn-danger position-absolute top-0 end-0 py-0 px-1 m-2" data-bs-toggle="tooltip" title="Remove from Favorites"><i className="ci-trash"></i></span></a>
                  <div className="text-center text-sm-start">
                    <h3 className="h6 product-title mb-2"><a href="marketplace-single.html">Top View Smartwatch 3D Render</a></h3>
                    <div className="d-inline-block text-accent">$19.<small>00</small></div><a className="d-inline-block text-accent fs-ms border-start ms-2 ps-2" href="marketplace-vendor.html">by modello</a>
                    <div className="d-sm-flex align-items-center pt-2">
                      <select className="form-select form-select-sm my-1 me-2">
                        <option>Standard license</option>
                        <option>Extended license</option>
                      </select>
                      <button className="btn btn-primary btn-sm mx-auto mx-sm-0 my-2" type="button"><i className="ci-cart me-1"></i>Add to Cart</button>
                    </div>
                  </div>
                </div>
                {/*<!-- Product-->*/}
                <div className="d-block d-sm-flex align-items-center pt-4 pb-2"><a className="d-block position-relative mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto" href="marketplace-single.html" style={{width: "12.5rem"}}><img className="rounded-3" src="/img/marketplace/products/th07.jpg" alt="Product" /><span className="btn btn-icon btn-danger position-absolute top-0 end-0 py-0 px-1 m-2" data-bs-toggle="tooltip" title="Remove from Favorites"><i className="ci-trash"></i></span></a>
                  <div className="text-center text-sm-start">
                    <h3 className="h6 product-title mb-2"><a href="marketplace-single.html">Gravity Devices UI Mockup (PSD)</a></h3>
                    <div className="d-inline-block text-accent">$15.<small>00</small></div><a className="d-inline-block text-accent fs-ms border-start ms-2 ps-2" href="marketplace-vendor.html">by pixels</a>
                    <div className="d-sm-flex align-items-center pt-2">
                      <select className="form-select form-select-sm my-1 me-2">
                        <option>Standard license</option>
                        <option>Extended license</option>
                      </select>
                      <button className="btn btn-primary btn-sm mx-auto mx-sm-0 my-2" type="button"><i className="ci-cart me-1"></i>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
			</DashboardLayout>
	)
}
