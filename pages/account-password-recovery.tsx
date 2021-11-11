/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import FashionLayout from "../layout/FashionLayout";

export default function AccountPasswordRecovery() {
    return (
        <FashionLayout title="Account Password Recovery">
            <>
                <div className="container py-4 py-lg-5 my-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <h2 className="h3 mb-4">Forgot your password?</h2>
                            <p className="fs-md">
                                Change your password in three easy steps. This
                                helps to keep your new password secure.
                            </p>
                            <ol className="list-unstyled fs-md">
                                <li>
                                    <span className="text-primary me-2">
                                        1.
                                    </span>
                                    Fill in your email address below.
                                </li>
                                <li>
                                    <span className="text-primary me-2">
                                        2.
                                    </span>
                                    We&#39;ll email you a temporary code.
                                </li>
                                <li>
                                    <span className="text-primary me-2">
                                        3.
                                    </span>
                                    Use the code to change your password on our
                                    secure website.
                                </li>
                            </ol>
                            <div className="card py-2 mt-4">
                                <form
                                    className="card-body needs-validation"
                                    noValidate
                                >
                                    <div className="mb-3">
                                        <label
                                            className="form-label"
                                            htmlFor="recover-email"
                                        >
                                            Enter your email address
                                        </label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            id="recover-email"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please provide valid email address.
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-primary"
                                        type="submit"
                                    >
                                        Get new password
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </FashionLayout>
    );
}
