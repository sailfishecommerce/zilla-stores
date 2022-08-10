/* eslint-disable @next/next/no-img-element */

import dynamic from "next/dynamic";
import Link from "next/link";

import GroceryLayout from "../layout/GroceryLayout";

const HomeGroceryCarousel = dynamic(
  () => import("../components/Carousel/HomeGroceryCarousel"),
  {
    ssr: false,
  }
);

const DiscountedProductCarousel = dynamic(
  () => import("../components/Carousel/DiscountedProductCarousel"),
  {
    ssr: false,
  }
);

const BestSellersCarousel = dynamic(
  () => import("../components/Carousel/BestsellersCarousel"),
  {
    ssr: false,
  }
);

const CustomerReviewCarousel = dynamic(
  () => import("../components/Carousel/CustomerReviewCarousel"),
  {
    ssr: false,
  }
);
export default function HomeGroceryStore() {
  return (
    <GroceryLayout title="Home grocery stores">
      <>
        <section className="ps-lg-4 pe-lg-3 pt-4">
          <div className="px-3 pt-2">
            <HomeGroceryCarousel />
            {/*<!-- How it works-->*/}
            <section className="pt-4 mb-4 mb-md-5">
              <h2 className="h3 text-center mb-grid-gutter pt-2">
                How it works?
              </h2>
              <div className="row g-0 bg-light rounded-3">
                <div className="col-xl-4 col-lg-12 col-md-4 border-end">
                  <div className="py-3">
                    <div
                      className="d-flex align-items-center mx-auto py-3 px-3"
                      style={{ maxWidth: "362px" }}
                    >
                      <div className="display-3 fw-normal opacity-15 me-4">
                        01
                      </div>
                      <div className="ps-2">
                        <img
                          className="d-block my-2"
                          src="/img/grocery/steps/01.png"
                          width="72"
                          alt="Order online"
                        />
                        <p className="mb-3 pt-1">
                          You order your favorite products online
                        </p>
                      </div>
                    </div>
                    <hr className="d-md-none d-lg-block d-xl-none" />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-4 border-end">
                  <div className="py-3">
                    <div
                      className="d-flex align-items-center mx-auto py-3 px-3"
                      style={{ maxWidth: "362px" }}
                    >
                      <div className="display-3 fw-normal opacity-15 me-4">
                        02
                      </div>
                      <div className="ps-2">
                        <img
                          className="d-block my-2"
                          src="/img/grocery/steps/02.png"
                          width="72"
                          alt="Grocery collected"
                        />
                        <p className="mb-3 pt-1">
                          A personal assistant collects the products from your
                          list
                        </p>
                      </div>
                    </div>
                    <hr className="d-md-none d-lg-block d-xl-none" />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-4">
                  <div className="py-3">
                    <div
                      className="d-flex align-items-center mx-auto py-3 px-3"
                      style={{ maxWidth: "362px" }}
                    >
                      <div className="display-3 fw-normal opacity-15 me-4">
                        03
                      </div>
                      <div className="ps-2">
                        <img
                          className="d-block my-2"
                          src="/img/grocery/steps/03.png"
                          width="72"
                          alt="Delivery"
                        />
                        <p className="mb-3 pt-1">
                          We deliver to the door at a time convenient for you
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*<!-- Discounted products (Carousel)-->*/}
            <DiscountedProductCarousel />
            {/*<!-- Bestsellers (Carousel)-->*/}
            <BestSellersCarousel />
            {/*<!-- Reviews-->*/}
            <section className="py-5 bg-light rounded-3 my-4 my-md-5 px-3 px-sm-4">
              <h2 className="h3 py-4 text-center">Customer reviews</h2>
              <CustomerReviewCarousel />
            </section>
            <div className="pb-3"></div>
          </div>
        </section>
      </>
    </GroceryLayout>
  );
}
