/* eslint-disable @next/next/no-img-element */

export default function GroceryHeader() {
	return (
		<header className="bg-light shadow-sm fixed-top" data-fixed-element>
		<div className="navbar navbar-expand-lg navbar-light">
			<div className="container-fluid"><a className="navbar-brand d-none d-sm-block me-3 me-xl-4 flex-shrink-0" href="index.html"><img src="/img/logo-dark.png" width="142" alt="Cartzilla" /></a><a className="navbar-brand d-sm-none me-2" href="index.html"><img src="/img/logo-icon.png" width="74" alt="Cartzilla" /></a>
				{/*<!-- Search-->*/}
				<div className="input-group d-none d-lg-flex flex-nowrap mx-4"><i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
					<input className="form-control rounded-start w-100" type="text" placeholder="Search for products" />
					<select className="form-select flex-shrink-0" style={{width: "14rem"}}>
						<option>All categories</option>
						<option>Bakery</option>
						<option>Fruits and Vegetables</option>
						<option>Dairy and Eggs</option>
						<option>Meat and Poultry</option>
						<option>Fish and Seafood</option>
						<option>Sauces and Spices</option>
						<option>Canned Food and Oil</option>
						<option>Alcoholic Beverages</option>
						<option>Soft Drinks and Juice</option>
						<option>Packets, Cereals</option>
						<option>Frozen</option>
						<option>Snaks, Sweets and Chips</option>
						<option>Personal hygiene</option>
						<option>Kitchenware</option>
					</select>
				</div>
				{/*<!-- Toolbar-->*/}
				<div className="navbar-toolbar d-flex flex-shrink-0 align-items-center ms-xl-2">
					<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sideNav"><span className="navbar-toggler-icon"></span></button><a className="navbar-tool d-flex d-lg-none" href="#searchBox" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="searchBox"><span className="navbar-tool-tooltip">Search</span>
						<div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-search"></i></div></a><a className="navbar-tool d-none d-lg-flex" href="#"><span className="navbar-tool-tooltip">Wishlist</span>
						<div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-heart"></i></div></a><a className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="#signin-modal" data-bs-toggle="modal">
						<div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-user"></i></div>
						<div className="navbar-tool-text ms-n3"><small>Hello, Sign in</small>My Account</div></a>
					<div className="navbar-tool dropdown ms-3"><a className="navbar-tool-icon-box bg-secondary dropdown-toggle" href="grocery-checkout.html"><span className="navbar-tool-label">3</span><i className="navbar-tool-icon ci-cart"></i></a><a className="navbar-tool-text" href="grocery-checkout.html"><small>My Cart</small>$25.00</a>
						<div className="dropdown-menu dropdown-menu-end">
							<div className="widget widget-cart px-3 pt-2 pb-3" style={{width: "20rem"}}>
								<div style={{height: "15rem"}} data-simplebar data-simplebar-auto-hide="false">
									<div className="widget-cart-item pb-2 border-bottom">
										<button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
										<div className="d-flex align-items-center"><a className="d-block" href="grocery-single.html"><img src="/img/grocery/cart/th01.jpg" width="64" alt="Product" /></a>
											<div className="ps-2">
												<h6 className="widget-product-title"><a href="grocery-single.html">Frozen Oven-ready Poultry</a></h6>
												<div className="widget-product-meta"><span className="text-accent me-2">$15.<small>00</small></span><span className="text-muted">x 1</span></div>
											</div>
										</div>
									</div>
									<div className="widget-cart-item py-2 border-bottom">
										<button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
										<div className="d-flex align-items-center"><a className="d-block" href="grocery-single.html"><img src="/img/grocery/cart/th02.jpg" width="64" alt="Product" /></a>
											<div className="ps-2">
												<h6 className="widget-product-title"><a href="grocery-single.html">Nut Chocolate Paste (750g)</a></h6>
												<div className="widget-product-meta"><span className="text-accent me-2">$6.<small>50</small></span><span className="text-muted">x 1</span></div>
											</div>
										</div>
									</div>
									<div className="widget-cart-item py-2 border-bottom">
										<button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
										<div className="d-flex align-items-center"><a className="d-block" href="grocery-single.html"><img src="/img/grocery/cart/th03.jpg" width="64" alt="Product" /></a>
											<div className="ps-2">
												<h6 className="widget-product-title"><a href="grocery-single.html">Mozzarella Mini Cheese</a></h6>
												<div className="widget-product-meta"><span className="text-accent me-2">$3.<small>50</small></span><span className="text-muted">x 1</span></div>
											</div>
										</div>
									</div>
								</div>
								<div className="d-flex flex-wrap justify-content-between align-items-center pt-3">
									<div className="fs-sm me-2 py-2"><span className="text-muted">Total:</span><span className="text-accent fs-base ms-1">$25.<small>00</small></span></div><a className="btn btn-primary btn-sm" href="grocery-checkout.html"><i className="ci-card me-2 fs-base align-middle"></i>Checkout<i className="ci-arrow-right ms-1 me-n1"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/*<!-- Search collapse-->*/}
		<div className="collapse" id="searchBox">
			<div className="card pt-2 pb-4 border-0 rounded-0">
				<div className="container">
					<div className="input-group"><i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
						<input className="form-control rounded-start" type="text" placeholder="Search for products" />
					</div>
				</div>
			</div>
		</div>
	</header>
	)
}
