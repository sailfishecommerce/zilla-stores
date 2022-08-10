import Link from "next/link";

export default function CheckoutStep() {
    return (
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
    );
}
