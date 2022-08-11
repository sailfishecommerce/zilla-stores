/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import DashboardLayout from "../layout/DashboardLayout";
import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardFavorites() {
  return (
    <DashboardLayout title="dashboard favourite">
      <div className="container mb-5 pb-3">
        <div className="bg-light shadow-lg rounded-3 overflow-hidden">
          <div className="row">
            {/*<!-- Sidebar-->*/}
            <DashboardSidebar />
            {/*<!-- Content-->*/}
            <section className="col-lg-8 pt-lg-4 pb-4 mb-3">
              <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                <h2 className="h3 pt-2 pb-4 mb-0 text-center text-sm-start border-bottom">
                  Favorites
                  <span className="badge bg-faded-accent fs-sm text-body align-middle ms-2">
                    4
                  </span>
                </h2>
                {/*<!-- Product-->*/}
                <div className="d-block d-sm-flex align-items-center py-4 border-bottom">
                  <Link href="/marketplace-single" passHref>
                    <a
                      className="d-block mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto"
                      style={{ width: "12.5rem" }}
                    >
                      <img
                        className="rounded-3"
                        src="/img/marketplace/products/th02.jpg"
                        alt="Product"
                      />
                    </a>
                  </Link>
                  <div className="text-center text-sm-start">
                    <h3 className="h6 product-title mb-2">
                      <Link href="/marketplace-single" passHref>
                        <a>UI Isometric Devices Pack (PSD)</a>
                      </Link>
                    </h3>
                    <div className="text-accent fs-sm mb-1">
                      Extended license
                    </div>
                    <div className="form-check d-table text-start mx-auto mx-sm-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="update-info-2"
                        checked
                      />
                      <label
                        className="form-check-label fs-ms"
                        htmlFor="update-info-2"
                      >
                        Notify me when this product is updated
                      </label>
                    </div>
                    <div className="d-flex align-items-center justify-content-center justify-content-sm-start pt-2">
                      <div className="my-2">
                        <button
                          className="btn btn-primary btn-sm me-3"
                          type="button"
                        >
                          <i className="ci-download me-1"></i>
                          Download
                        </button>
                      </div>
                      <a
                        className="d-block text-muted text-center my-2"
                        href="#"
                      >
                        <div className="star-rating">
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star"></i>
                        </div>
                        <div className="fs-xs">You rated this product</div>
                      </a>
                    </div>
                  </div>
                </div>
                {/*<!-- Product-->*/}
                <div className="d-block d-sm-flex align-items-center py-4 border-bottom">
                  <Link href="/marketplace-single" passHref>
                    <a
                      className="d-block mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto"
                      style={{ width: "12.5rem" }}
                    >
                      <img
                        className="rounded-3"
                        src="/img/marketplace/products/th03.jpg"
                        alt="Product"
                      />
                    </a>
                  </Link>
                  <div className="text-center text-sm-start">
                    <h3 className="h6 product-title mb-2">
                      <Link href="/marketplace-single" passHref>
                        <a>Bandicoot - Multipurpose E-Commerce Template</a>
                      </Link>
                    </h3>
                    <div className="text-accent fs-sm mb-1">
                      Standard license
                    </div>
                    <div className="form-check d-table text-start mx-auto mx-sm-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="update-info-3"
                        checked
                      />
                      <label
                        className="form-check-label fs-ms"
                        htmlFor="update-info-3"
                      >
                        Notify me when this product is updated
                      </label>
                    </div>
                    <div className="d-flex align-items-center justify-content-center justify-content-sm-start pt-2">
                      <div className="my-2">
                        <button
                          className="btn btn-primary btn-sm me-3"
                          type="button"
                        >
                          <i className="ci-download me-1"></i>
                          Download
                        </button>
                      </div>
                      <a
                        className="d-block text-muted text-center my-2"
                        href="#"
                      >
                        <div className="star-rating">
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-filled active"></i>
                        </div>
                        <div className="fs-xs">You rated this product</div>
                      </a>
                    </div>
                  </div>
                </div>
                {/*<!-- Product-->*/}
                <div className="d-block d-sm-flex align-items-center py-4 border-bottom">
                  <Link href="/marketplace-single" passHref>
                    <a
                      className="d-block mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto"
                      style={{ width: "12.5rem" }}
                    >
                      <img
                        className="rounded-3"
                        src="/img/marketplace/products/th04.jpg"
                        alt="Product"
                      />
                    </a>
                  </Link>
                  <div className="text-center text-sm-start">
                    <h3 className="h6 product-title mb-2">
                      <Link href="/marketplace-single" passHref>
                        <a>Hardcover Book Catalog Mockup (PSD)</a>
                      </Link>
                    </h3>
                    <div className="text-accent fs-sm mb-1">
                      Standard license
                    </div>
                    <div className="form-check d-table text-start mx-auto mx-sm-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="update-info-4"
                      />
                      <label
                        className="form-check-label fs-ms"
                        htmlFor="update-info-4"
                      >
                        Notify me when this product is updated
                      </label>
                    </div>
                    <div className="d-flex align-items-center justify-content-center justify-content-sm-start pt-2">
                      <div className="my-2">
                        <button
                          className="btn btn-primary btn-sm me-3"
                          type="button"
                        >
                          <i className="ci-download me-1"></i>
                          Download
                        </button>
                      </div>
                      <a
                        className="d-block text-muted text-center my-2"
                        href="#"
                      >
                        <div className="star-rating">
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-half active"></i>
                          <i className="star-rating-icon ci-star"></i>
                        </div>
                        <div className="fs-xs">Reate this product</div>
                      </a>
                    </div>
                  </div>
                </div>
                {/*<!-- Product-->*/}
                <div className="d-block d-sm-flex align-items-center py-4 border-bottom">
                  <Link href="/marketplace-single" passHref>
                    <a
                      className="d-block mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto"
                      style={{ width: "12.5rem" }}
                    >
                      <img
                        className="rounded-3"
                        src="/img/marketplace/products/th05.jpg"
                        alt="Product"
                      />
                    </a>
                  </Link>
                  <div className="text-center text-sm-start">
                    <h3 className="h6 product-title mb-2">
                      <Link href="/marketplace-single" passHref>
                        <a>Photo of Business Meeting</a>
                      </Link>
                    </h3>
                    <div className="text-accent fs-sm mb-1">
                      Standard license
                    </div>
                    <div className="form-check d-table text-start mx-auto mx-sm-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="update-info-5"
                      />
                      <label
                        className="form-check-label fs-ms"
                        htmlFor="update-info-5"
                      >
                        Notify me when this product is updated
                      </label>
                    </div>
                    <div className="d-flex align-items-center justify-content-center justify-content-sm-start pt-2">
                      <div className="my-2">
                        <button
                          className="btn btn-primary btn-sm me-3"
                          type="button"
                        >
                          <i className="ci-download me-1"></i>
                          Download
                        </button>
                      </div>
                      <a
                        className="d-block text-muted text-center my-2"
                        href="#"
                      >
                        <div className="star-rating">
                          <i className="star-rating-icon ci-star"></i>
                          <i className="star-rating-icon ci-star"></i>
                          <i className="star-rating-icon ci-star"></i>
                          <i className="star-rating-icon ci-star"></i>
                          <i className="star-rating-icon ci-star"></i>
                        </div>
                        <div className="fs-xs">Reate this product</div>
                      </a>
                    </div>
                  </div>
                </div>
                {/*<!-- Product-->*/}
                <div className="d-block d-sm-flex align-items-center pt-4 pb-2">
                  <Link href="/marketplace-single" passHref>
                    <a
                      className="d-block position-relative mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto"
                      style={{ width: "12.5rem" }}
                    >
                      <img
                        className="rounded-3"
                        src="/img/marketplace/products/th07.jpg"
                        alt="Product"
                      />
                      <span
                        className="btn btn-icon btn-danger position-absolute top-0 end-0 py-0 px-1 m-2"
                        data-bs-toggle="tooltip"
                        title="Remove from Favorites"
                      >
                        <i className="ci-trash"></i>
                      </span>
                    </a>
                  </Link>
                  <div className="text-center text-sm-start">
                    <h3 className="h6 product-title mb-2">
                      <Link href="/marketplace-single" passHref>
                        <a>Gravity Devices UI Mockup (PSD)</a>
                      </Link>
                    </h3>
                    <div className="d-inline-block text-accent">
                      $15.<small>00</small>
                    </div>
                    <Link href="/marketplace-vendor" passHref>
                      <a className="d-inline-block text-accent fs-ms border-start ms-2 ps-2">
                        by pixels
                      </a>
                    </Link>
                    <div className="d-sm-flex align-items-center pt-2">
                      <select className="form-select form-select-sm my-1 me-2">
                        <option>Standard license</option>
                        <option>Extended license</option>
                      </select>
                      <button
                        className="btn btn-primary btn-sm mx-auto mx-sm-0 my-2"
                        type="button"
                      >
                        <i className="ci-cart me-1"></i>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
