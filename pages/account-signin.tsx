
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import FashionLayout from "../layout/FashionLayout";

export default function AccountSignin() {
    return (
        <FashionLayout title="Account signin">
            <>
                <div className="container py-4 py-lg-5 my-4">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card border-0 shadow">
                                <div className="card-body">
                                    <h2 className="h4 mb-1">Sign in</h2>
                                    <div className="py-3">
                                        <h3 className="d-inline-block align-middle fs-base fw-medium mb-2 me-2">
                                            With social account:
                                        </h3>
                                        <div className="d-inline-block align-middle">
                                            <a
                                                className="btn-social bs-google me-2 mb-2"
                                                href="#"
                                                data-bs-toggle="tooltip"
                                                title="Sign in with Google"
                                            >
                                                <i className="ci-google"></i>
                                            </a>
                                            <a
                                                className="btn-social bs-facebook me-2 mb-2"
                                                href="#"
                                                data-bs-toggle="tooltip"
                                                title="Sign in with Facebook"
                                            >
                                                <i className="ci-facebook"></i>
                                            </a>
                                            <a
                                                className="btn-social bs-twitter me-2 mb-2"
                                                href="#"
                                                data-bs-toggle="tooltip"
                                                title="Sign in with Twitter"
                                            >
                                                <i className="ci-twitter"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <hr />
                                    <h3 className="fs-base pt-4 pb-2">
                                        Or using form below
                                    </h3>
                                    <form
                                        className="needs-validation"
                                        noValidate
                                    >
                                        <div className="input-group mb-3">
                                            <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                            <input
                                                className="form-control rounded-start"
                                                type="email"
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <i className="ci-locked position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                            <div className="password-toggle w-100">
                                                <input
                                                    className="form-control"
                                                    type="password"
                                                    placeholder="Password"
                                                    required
                                                />
                                                <label
                                                    className="password-toggle-btn"
                                                    aria-label="Show/hide password"
                                                >
                                                    <input
                                                        className="password-toggle-check"
                                                        type="checkbox"
                                                    />
                                                    <span className="password-toggle-indicator"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap justify-content-between">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    checked
                                                    id="remember_me"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="remember_me"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                            <Link
                                                href="/account-password-recovery"
                                                passHref
                                            >
                                                <a className="nav-link-inline fs-sm">
                                                    Forgot password?
                                                </a>
                                            </Link>
                                        </div>
                                        <hr className="mt-4" />
                                        <div className="text-end pt-4">
                                            <button
                                                className="btn btn-primary"
                                                type="submit"
                                            >
                                                <i className="ci-sign-in me-2 ms-n21"></i>
                                                Sign In
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pt-4 mt-3 mt-md-0">
                            <h2 className="h4 mb-3">No account? Sign up</h2>
                            <p className="fs-sm text-muted mb-4">
                                Registration takes less than a minute but gives
                                you full control over your orders.
                            </p>
                            <form className="needs-validation" noValidate>
                                <div className="row gx-4 gy-3">
                                    <div className="col-sm-6">
                                        <label
                                            className="form-label"
                                            htmlFor="reg-fn"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            required
                                            id="reg-fn"
                                        />
                                        <div className="invalid-feedback">
                                            Please enter your first name!
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label
                                            className="form-label"
                                            htmlFor="reg-ln"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            required
                                            id="reg-ln"
                                        />
                                        <div className="invalid-feedback">
                                            Please enter your last name!
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label
                                            className="form-label"
                                            htmlFor="reg-email"
                                        >
                                            E-mail Address
                                        </label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            required
                                            id="reg-email"
                                        />
                                        <div className="invalid-feedback">
                                            Please enter valid email address!
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label
                                            className="form-label"
                                            htmlFor="reg-phone"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            required
                                            id="reg-phone"
                                        />
                                        <div className="invalid-feedback">
                                            Please enter your phone number!
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label
                                            className="form-label"
                                            htmlFor="reg-password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            required
                                            id="reg-password"
                                        />
                                        <div className="invalid-feedback">
                                            Please enter password!
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label
                                            className="form-label"
                                            htmlFor="reg-password-confirm"
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            required
                                            id="reg-password-confirm"
                                        />
                                        <div className="invalid-feedback">
                                            Passwords do not match!
                                        </div>
                                    </div>
                                    <div className="col-12 text-end">
                                        <button
                                            className="btn btn-primary"
                                            type="submit"
                                        >
                                            <i className="ci-user me-2 ms-n1"></i>
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        </FashionLayout>
    );
}
