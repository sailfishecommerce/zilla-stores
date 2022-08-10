/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";

import GroceryLayout from "../layout/GroceryLayout";

const GroceryRelatedProduct = dynamic(
  () => import("../components/Carousel/GroceryRelatedProduct"),
  {
    ssr: false,
  }
);

export default function GrocerySingle() {
  return (
    <GroceryLayout title="Grocery single">
      <section className="ps-lg-4 pe-lg-3 pt-4">
        <div className="px-3 pt-2">
          {/*<!-- Page title + breadcrumb-->*/}
          <nav className="mb-4" aria-label="breadcrumb">
            <ol className="breadcrumb flex-lg-nowrap">
              <li className="breadcrumb-item">
                <Link href="/home-grocery-store">
                  <a className="text-nowrap">
                    <i className="ci-home"></i>Home
                  </a>
                </Link>
              </li>
              <li className="breadcrumb-item text-nowrap">
                <Link href="/grocery-catalog">
                  <a>Product catalog</a>
                </Link>
              </li>
              <li
                className="breadcrumb-item text-nowrap active"
                aria-current="page"
              >
                Single product
              </li>
            </ol>
          </nav>
          {/*<!-- Content-->*/}
          {/*<!-- Product Gallery + description-->*/}
          <section className="row g-0 mx-n2 pb-5 mb-xl-3">
            <div className="col-xl-7 px-2 mb-3">
              <div className="h-100 bg-light rounded-3 p-4">
                <div className="product-gallery">
                  <div className="product-gallery-preview order-sm-2">
                    <div
                      className="product-gallery-preview-item active"
                      id="first"
                    >
                      <img
                        src="/img/grocery/single/01.jpg"
                        alt="Product image"
                      />
                    </div>
                    <div className="product-gallery-preview-item" id="second">
                      <img
                        src="/img/grocery/single/02.jpg"
                        alt="Product image"
                      />
                    </div>
                    <div className="product-gallery-preview-item" id="third">
                      <img
                        src="/img/grocery/single/03.jpg"
                        alt="Product image"
                      />
                    </div>
                  </div>
                  <div className="product-gallery-thumblist order-sm-1">
                    <a
                      className="product-gallery-thumblist-item active"
                      href="#first"
                    >
                      <img
                        src="/img/grocery/single/th01.jpg"
                        alt="Product thumb"
                      />
                    </a>
                    <a
                      className="product-gallery-thumblist-item"
                      href="#second"
                    >
                      <img
                        src="/img/grocery/single/th02.jpg"
                        alt="Product thumb"
                      />
                    </a>
                    <a className="product-gallery-thumblist-item" href="#third">
                      <img
                        src="/img/grocery/single/th03.jpg"
                        alt="Product thumb"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 px-2 mb-3">
              <div className="h-100 bg-light rounded-3 py-5 px-4 px-sm-5">
                <a className="product-meta d-block fs-sm pb-2" href="#">
                  Packets, Cereals
                </a>
                <h1 className="h2">
                  Muesli Fitness Nutritious Energy, Gluten Free (500g)
                </h1>
                <div className="h2 fw-normal text-accent">
                  $4.<small>99</small>
                </div>
                <div className="d-flex flex-wrap align-items-center pt-4 pb-2 mb-3">
                  <select
                    className="form-select me-3 mb-3"
                    style={{ width: "5rem" }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <button
                    className="btn btn-primary btn-shadow me-3 mb-3"
                    type="submit"
                  >
                    <i className="ci-cart fs-lg me-2"></i>
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-icon btn-secondary mb-3"
                    type="submit"
                    data-bs-toggle="tooltip"
                    title="Add to Wishlist"
                  >
                    <i className="ci-heart fs-lg"></i>
                  </button>
                </div>
                <h6>Product description</h6>
                <ul className="list-unstyled fs-sm pt-2 mb-0">
                  <li>
                    <i className="ci-check-circle text-success me-2"></i>
                    Natural ingredients
                  </li>
                  <li>
                    <i className="ci-check-circle text-success me-2"></i>
                    No dyes and flavor enhancers
                  </li>
                  <li>
                    <i className="ci-check-circle text-success me-2"></i>
                    Gluten free
                  </li>
                  <li>
                    <i className="ci-check-circle text-success me-2"></i>
                    Vitamins B2, B3, B5 and B6
                  </li>
                  <li>
                    <i className="ci-check-circle text-success me-2"></i>
                    Tastes better with milk
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/*<!-- Related products-->*/}
          <section className="pb-5 mb-2 mb-xl-4">
            <h2 className="h3 pb-2 mb-grid-gutter text-center">
              You may also like
            </h2>
            <GroceryRelatedProduct />
          </section>
        </div>
      </section>
    </GroceryLayout>
  );
}
