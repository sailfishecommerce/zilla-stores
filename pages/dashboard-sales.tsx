/* eslint-disable @next/next/no-img-element */
import DashboardLayout from "../layout/DashboardLayout";

export default function DashboardSales() {
    return (
        <DashboardLayout title="Dashboard Sales">
            <>
                <div className="container mb-5 pb-3">
                    <div className="bg-light shadow-lg rounded-3 overflow-hidden">
                        <div className="row">
                            {/*<!-- Sidebar-->*/}
                            <aside className="col-lg-4 pe-xl-5">
                                {/*<!-- Account menu toggler (hidden on screens larger 992px)-->*/}
                                <div className="d-block d-lg-none p-4">
                                    <a
                                        className="btn btn-outline-accent d-block"
                                        href="#account-menu"
                                        data-bs-toggle="collapse"
                                    >
                                        <i className="ci-menu me-2"></i>Account
                                        menu
                                    </a>
                                </div>
                                {/*<!-- Actual menu-->*/}
                                <div className="h-100 border-end mb-2">
                                    <div
                                        className="d-lg-block collapse"
                                        id="account-menu"
                                    >
                                        <div className="bg-secondary p-4">
                                            <h3 className="fs-sm mb-0 text-muted">
                                                Account
                                            </h3>
                                        </div>
                                        <ul className="list-unstyled mb-0">
                                            <li className="border-bottom mb-0">
                                                <a
                                                    className="nav-link-style d-flex align-items-center px-4 py-3"
                                                    href="dashboard-settings.html"
                                                >
                                                    <i className="ci-settings opacity-60 me-2"></i>
                                                    Settings
                                                </a>
                                            </li>
                                            <li className="border-bottom mb-0">
                                                <a
                                                    className="nav-link-style d-flex align-items-center px-4 py-3"
                                                    href="dashboard-purchases.html"
                                                >
                                                    <i className="ci-basket opacity-60 me-2"></i>
                                                    Purchases
                                                </a>
                                            </li>
                                            <li className="mb-0">
                                                <a
                                                    className="nav-link-style d-flex align-items-center px-4 py-3"
                                                    href="dashboard-favorites.html"
                                                >
                                                    <i className="ci-heart opacity-60 me-2"></i>
                                                    Favorites
                                                    <span className="fs-sm text-muted ms-auto">
                                                        4
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="bg-secondary p-4">
                                            <h3 className="fs-sm mb-0 text-muted">
                                                Seller Dashboard
                                            </h3>
                                        </div>
                                        <ul className="list-unstyled mb-0">
                                            <li className="border-bottom mb-0">
                                                <a
                                                    className="nav-link-style d-flex align-items-center px-4 py-3 active"
                                                    href="dashboard-sales.html"
                                                >
                                                    <i className="ci-dollar opacity-60 me-2"></i>
                                                    Sales
                                                    <span className="fs-sm text-muted ms-auto">
                                                        $1,375.00
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="border-bottom mb-0">
                                                <a
                                                    className="nav-link-style d-flex align-items-center px-4 py-3"
                                                    href="dashboard-products.html"
                                                >
                                                    <i className="ci-package opacity-60 me-2"></i>
                                                    Products
                                                    <span className="fs-sm text-muted ms-auto">
                                                        5
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="border-bottom mb-0">
                                                <a
                                                    className="nav-link-style d-flex align-items-center px-4 py-3"
                                                    href="dashboard-add-new-product.html"
                                                >
                                                    <i className="ci-cloud-upload opacity-60 me-2"></i>
                                                    Add New Product
                                                </a>
                                            </li>
                                            <li className="border-bottom mb-0">
                                                <a
                                                    className="nav-link-style d-flex align-items-center px-4 py-3"
                                                    href="dashboard-payouts.html"
                                                >
                                                    <i className="ci-currency-exchange opacity-60 me-2"></i>
                                                    Payouts
                                                </a>
                                            </li>
                                            <li className="mb-0">
                                                <a
                                                    className="nav-link-style d-flex align-items-center px-4 py-3"
                                                    href="account-signin.html"
                                                >
                                                    <i className="ci-sign-out opacity-60 me-2"></i>
                                                    Sign out
                                                </a>
                                            </li>
                                        </ul>
                                        <hr />
                                    </div>
                                </div>
                            </aside>
                            {/*<!-- Content-->*/}
                            <section className="col-lg-8 pt-lg-4 pb-4 mb-3">
                                <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                                    <h2 className="h3 py-2 text-center text-sm-start">
                                        Your sales / earnings
                                    </h2>
                                    <div className="row mx-n2 pt-2">
                                        <div className="col-md-4 col-sm-6 px-2 mb-4">
                                            <div className="bg-secondary h-100 rounded-3 p-4 text-center">
                                                <h3 className="fs-sm text-muted">
                                                    Earnings (before taxes)
                                                </h3>
                                                <p className="h2 mb-2">
                                                    $1,690.<small>50</small>
                                                </p>
                                                <p className="fs-ms text-muted mb-0">
                                                    Sales 8/1/2021 - 8/15/2021
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 px-2 mb-4">
                                            <div className="bg-secondary h-100 rounded-3 p-4 text-center">
                                                <h3 className="fs-sm text-muted">
                                                    Your balance
                                                </h3>
                                                <p className="h2 mb-2">
                                                    $1,375.<small>00</small>
                                                </p>
                                                <p className="fs-ms text-muted mb-0">
                                                    To be paid on 8/15/2021
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12 px-2 mb-4">
                                            <div className="bg-secondary h-100 rounded-3 p-4 text-center">
                                                <h3 className="fs-sm text-muted">
                                                    Lifetime earnings
                                                </h3>
                                                <p className="h2 mb-2">
                                                    $9,156.<small>74</small>
                                                </p>
                                                <p className="fs-ms text-muted mb-0">
                                                    Based on list price
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mx-n2">
                                        <div className="col-lg-8 px-2">
                                            <div className="card mb-4">
                                                <div className="card-body">
                                                    <h3 className="fs-sm pb-3 mb-3 border-bottom">
                                                        Sales value, USD{" "}
                                                        <span className="fw-normal fs-xs text-muted">
                                                            (Past 2 weeks)
                                                        </span>
                                                    </h3>
                                                    <div
                                                        className="ct-chart ct-perfect-fourth"
                                                        data-line-chart='{"labels": ["22 Jul", "", "24 Jul", "", "26 Jul", "", "28 Jul", "", "30 Jul", "", "01 Aug", "", "03 Aug", "", "05 Aug"], "series": [[0, 100, 200, 150, 50, 0, 0, 50, 0, 50, 50, 50, 0, 100, 0]]}'
                                                    ></div>
                                                </div>
                                            </div>
                                            <div className="card mb-4 mb-lg-2">
                                                <div className="card-body">
                                                    <h3 className="fs-sm pb-3 mb-3 border-bottom">
                                                        Order count{" "}
                                                        <span className="fw-normal fs-xs text-muted">
                                                            (Past 2 weeks)
                                                        </span>
                                                    </h3>
                                                    <div
                                                        className="ct-chart ct-perfect-fourth"
                                                        data-line-chart='{"labels": ["22 Jul", "", "24 Jul", "", "26 Jul", "", "28 Jul", "", "30 Jul", "", "01 Aug", "", "03 Aug", "", "05 Aug"], "series": [[0, 2, 4, 3, 1, 0, 0, 1, 0, 1, 1, 1, 0, 2, 0]]}'
                                                        data-options='{"axisY": {"onlyInteger": true}}'
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 px-2">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h3 className="fs-sm pb-3 mb-0 border-bottom">
                                                        Your top countries
                                                    </h3>
                                                    <div className="d-flex justify-content-between align-items-center fs-sm py-2 border-bottom">
                                                        <div className="d-flex align-items-start py-1">
                                                            <img
                                                                src="/img/marketplace/account/flags/usa.png"
                                                                width="20"
                                                                alt="USA"
                                                            />
                                                            <div className="ps-1">
                                                                United States
                                                            </div>
                                                        </div>
                                                        <span>$452</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center fs-sm py-2 border-bottom">
                                                        <div className="d-flex align-items-start py-1">
                                                            <img
                                                                src="/img/marketplace/account/flags/sweden.png"
                                                                width="20"
                                                                alt="Sweden"
                                                            />
                                                            <div className="ps-1">
                                                                Sweden
                                                            </div>
                                                        </div>
                                                        <span>$318</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center fs-sm py-2 border-bottom">
                                                        <div className="d-flex align-items-start py-1">
                                                            <img
                                                                src="/img/marketplace/account/flags/india.png"
                                                                width="20"
                                                                alt="India"
                                                            />
                                                            <div className="ps-1">
                                                                India
                                                            </div>
                                                        </div>
                                                        <span>$106</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center fs-sm py-2 border-bottom">
                                                        <div className="d-flex align-items-start py-1">
                                                            <img
                                                                src="/img/marketplace/account/flags/france.png"
                                                                width="20"
                                                                alt="France"
                                                            />
                                                            <div className="ps-1">
                                                                France
                                                            </div>
                                                        </div>
                                                        <span>$82</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center fs-sm py-2 border-bottom">
                                                        <div className="d-flex align-items-start py-1">
                                                            <img
                                                                src="/img/marketplace/account/flags/argentina.png"
                                                                width="20"
                                                                alt="Argentina"
                                                            />
                                                            <div className="ps-1">
                                                                Argentina
                                                            </div>
                                                        </div>
                                                        <span>$40</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center fs-sm pt-2">
                                                        <div className="d-flex align-items-start py-1">
                                                            <img
                                                                src="/img/marketplace/account/flags/south-africa.png"
                                                                width="20"
                                                                alt="South Africa"
                                                            />
                                                            <div className="ps-1">
                                                                South Africa
                                                            </div>
                                                        </div>
                                                        <span>$17</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </>
        </DashboardLayout>
    );
}
