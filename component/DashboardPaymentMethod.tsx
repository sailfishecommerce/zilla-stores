import React from 'react'

export default function DashboardPaymentMethod() {
	return (
		<form className="needs-validation modal fade" method="post" id="add-payment" tabIndex={-1} noValidate>
		<div className="modal-dialog modal-lg">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title">Add a payment method</h5>
					<button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div className="modal-body">
					<div className="form-check mb-4">
						<input className="form-check-input" type="radio" id="paypal" name="payment-method" />
						<label className="form-check-label" htmlFor="paypal">PayPal<img className="d-inline-block align-middle ms-2" src="/img/card-paypal.png" width="39" alt="PayPal"></label>
					</div>
					<div className="form-check mb-4">
						<input className="form-check-input" type="radio" id="card" name="payment-method" checked />
						<label className="form-check-label" htmlFor="card">Credit / Debit card<img className="d-inline-block align-middle ms-2" src="/img/cards.png" width="187" alt="Credit card"></label>
					</div>
					<div className="row g-3 mb-2">
						<div className="col-sm-6">
							<input className="form-control" type="text" name="number" placeholder="Card Number" required />
							<div className="invalid-feedback">Please fill in the card number!</div>
						</div>
						<div className="col-sm-6">
							<input className="form-control" type="text" name="name" placeholder="Full Name" required />
							<div className="invalid-feedback">Please provide name on the card!</div>
						</div>
						<div className="col-sm-3">
							<input className="form-control" type="text" name="expiry" placeholder="MM/YY" required />
							<div className="invalid-feedback">Please provide card expiration date!</div>
						</div>
						<div className="col-sm-3">
							<input className="form-control" type="text" name="cvc" placeholder="CVC" required />
							<div className="invalid-feedback">Please provide card CVC code!</div>
						</div>
						<div className="col-sm-6">
							<button className="btn btn-primary d-block w-100" type="submit">Register this card</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
	)
}
