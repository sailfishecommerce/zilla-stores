import Link from 'next/link'
import FashionLayout from "../layout/FashionLayout";

export default function CheckoutComplete() {
	return (
			<FashionLayout title="Checkout | Completed">
				<div className="container pb-5 mb-sm-4">
					<div className="pt-5">
						<div className="card py-3 mt-sm-3">
							<div className="card-body text-center">
								<h2 className="h4 pb-3">Thank you for your order!</h2>
								<p className="fs-sm mb-2">Your order has been placed and will be processed as soon as possible.</p>
								<p className="fs-sm mb-2">Make sure you make note of your order number, which is <span className='fw-medium'>34VB5540K83.</span></p>
								<p className="fs-sm">You will be receiving an email shortly with confirmation of your order. <u>You can now:</u></p><a className="btn btn-secondary mt-3 me-3" href="shop-grid-ls.html">Go back shopping</a>
								<Link
									href="/order-tracking"
								passHref>
								<a className="btn btn-primary mt-3"
								><i className="ci-location"></i>&nbsp;Track order</a>
								</Link>
							</div>
						</div>
					</div>
      	</div>
			</FashionLayout>
    );
}
