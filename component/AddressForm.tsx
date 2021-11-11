
export default function AddressForm() {
	return (
		<form className="needs-validation modal fade" method="post" id="add-address" tabIndex={-1} noValidate>
		<div className="modal-dialog modal-lg">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title">Add a new address</h5>
					<button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div className="modal-body">
					<div className="row gx-4 gy-3">
						<div className="col-sm-6">
							<label className="form-label" htmlFor="address-fn">First name</label>
							<input className="form-control" type="text" id="address-fn" required />
							<div className="invalid-feedback">Please fill in you first name!</div>
						</div>
						<div className="col-sm-6">
							<label className="form-label" htmlFor="address-ln">Last name</label>
							<input className="form-control" type="text" id="address-ln" required />
							<div className="invalid-feedback">Please fill in you last name!</div>
						</div>
						<div className="col-sm-6">
							<label className="form-label" htmlFor="address-company">Company</label>
							<input className="form-control" type="text" id="address-company" />
						</div>
						<div className="col-sm-6">
							<label className="form-label" htmlFor="address-country">Country</label>
							<select className="form-select" id="address-country" required>
								<option>Select country</option>
								<option value="Argentina">Argentina</option>
								<option value="Belgium">Belgium</option>
								<option value="France">France</option>
								<option value="Germany">Germany</option>
								<option value="Spain">Spain</option>
								<option value="UK">United Kingdom</option>
								<option value="USA">USA</option>
							</select>
							<div className="invalid-feedback">Please select your country!</div>
						</div>
						<div className="col-sm-6">
							<label className="form-label" htmlFor="address-city">City</label>
							<input className="form-control" type="text" id="address-city" required />
							<div className="invalid-feedback">Please fill in your city!</div>
						</div>
						<div className="col-sm-6">
							<label className="form-label" htmlFor="address-line1">Line 1</label>
							<input className="form-control" type="text" id="address-line1" required />
							<div className="invalid-feedback">Please fill in your address!</div>
						</div>
						<div className="col-sm-6">
							<label className="form-label" htmlFor="address-line2">Line 2</label>
							<input className="form-control" type="text" id="address-line2" />
						</div>
						<div className="col-sm-6">
							<label className="form-label" htmlFor="address-zip">ZIP code</label>
							<input className="form-control" type="text" id="address-zip" required />
							<div className="invalid-feedback">Please add your ZIP code!</div>
						</div>
						<div className="col-12">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" id="address-primary" />
								<label className="form-check-label" htmlFor="address-primary">Make this address primary</label>
							</div>
						</div>
					</div>
				</div>
				<div className="modal-footer">
					<button className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
					<button className="btn btn-primary btn-shadow" type="submit">Add address</button>
				</div>
			</div>
		</div>
	</form>
	)
}
