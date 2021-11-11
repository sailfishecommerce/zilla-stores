import Link from "next/link";

export default function DashboardSidebar() {
    return (
        <aside className="col-lg-4 pe-xl-5">
            {/*<!-- Account menu toggler (hidden on screens larger 992px)-->*/}
            <div className="d-block d-lg-none p-4">
                <a
                    className="btn btn-outline-accent d-block"
                    href="#account-menu"
                    data-bs-toggle="collapse"
                >
                    <i className="ci-menu me-2"></i>Account menu
                </a>
            </div>
            <div className="h-100 border-end mb-2">
                <div className="d-lg-block collapse" id="account-menu">
                    <div className="bg-secondary p-4">
                        <h3 className="fs-sm mb-0 text-muted">Account</h3>
                    </div>
                    <ul className="list-unstyled mb-0">
                        <li className="border-bottom mb-0">
                            <Link href="/dashboard-settings" passHref>
                                <a className="nav-link-style d-flex align-items-center px-4 py-3">
                                    <i className="ci-settings opacity-60 me-2"></i>
                                    Settings
                                </a>
                            </Link>
                        </li>
                        <li className="border-bottom mb-0">
                            <Link href="/dashboard-purchases" passHref>
                                <a className="nav-link-style d-flex align-items-center px-4 py-3">
                                    <i className="ci-basket opacity-60 me-2"></i>
                                    Purchases
                                </a>
                            </Link>
                        </li>
                        <li className="mb-0">
                            <Link href="/dashboard-favorites" passHref>
                                <a className="nav-link-style d-flex align-items-center px-4 py-3">
                                    <i className="ci-heart opacity-60 me-2"></i>
                                    Favorites
                                    <span className="fs-sm text-muted ms-auto">
                                        4
                                    </span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <div className="bg-secondary p-4">
                        <h3 className="fs-sm mb-0 text-muted">
                            Seller Dashboard
                        </h3>
                    </div>
                    <ul className="list-unstyled mb-0">
                        <li className="border-bottom mb-0">
                            <Link href="/dashboard-sales" passHref>
                                <a className="nav-link-style d-flex align-items-center px-4 py-3">
                                    <i className="ci-dollar opacity-60 me-2"></i>
                                    Sales
                                    <span className="fs-sm text-muted ms-auto">
                                        $1,375.00
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className="border-bottom mb-0">
                            <Link href="/dashboard-products" passHref>
                                <a className="nav-link-style d-flex align-items-center px-4 py-3">
                                    <i className="ci-package opacity-60 me-2"></i>
                                    Products
                                    <span className="fs-sm text-muted ms-auto">
                                        5
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className="border-bottom mb-0">
                            <Link href="/dashboard-add-new-product" passHref>
                                <a className="nav-link-style d-flex align-items-center px-4 py-3">
                                    <i className="ci-cloud-upload opacity-60 me-2"></i>
                                    Add New Product
                                </a>
                            </Link>
                        </li>
                        <li className="border-bottom mb-0">
                            <Link href="/dashboard-payouts" passHref>
                                <a className="nav-link-style d-flex align-items-center px-4 py-3 active">
                                    <i className="ci-currency-exchange opacity-60 me-2"></i>
                                    Payouts
                                </a>
                            </Link>
                        </li>
                        <li className="mb-0">
                            <Link href="/account-signin" passHref>
                                <a className="nav-link-style d-flex align-items-center px-4 py-3">
                                    <i className="ci-sign-out opacity-60 me-2"></i>
                                    Sign out
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <hr />
                </div>
            </div>
        </aside>
    );
}
