/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";

import FashionLayout from "../layout/FashionLayout";

export default function HomeFashionStorev2() {
  const HomeFashionCarousel = dynamic(
    () => import("@/components/Carousel/HomeFashionCarousel"),
    {
      ssr: false,
    }
  );
  const WomenProductGridCarousel = dynamic(
    () => import("@/components/Carousel/WomenProductGridCarousel"),
    {
      ssr: false,
    }
  );
  const MenProductGridCarousel = dynamic(
    () => import("@/components/Carousel/MenProductGridCarousel"),
    {
      ssr: false,
    }
  );
  const KidsProductGridCarousel = dynamic(
    () => import("@/components/Carousel/KidsProductGridCarousel"),
    {
      ssr: false,
    }
  );

  return (
    <FashionLayout title="Home fashion store v2">
      <>
        <HomeFashionCarousel />
        <WomenProductGridCarousel />
        {/*<!-- Category (Men)-->*/}
        <MenProductGridCarousel />
        {/*<!-- Category (Kids)-->*/}
        <KidsProductGridCarousel />
        {/*<!-- Shop by brand-->*/}
        <section className="container py-lg-4">
          <h2 className="h3 text-center pb-4">Shop by brand</h2>
          <div className="row">
            <div className="col-md-3 col-sm-4 col-6">
              <a
                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                href="#"
              >
                <img
                  className="d-block mx-auto"
                  src="/img/shop/brands/01.png"
                  style={{ width: "150px" }}
                  alt="Brand"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <a
                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                href="#"
              >
                <img
                  className="d-block mx-auto"
                  src="/img/shop/brands/02.png"
                  style={{ width: "150px" }}
                  alt="Brand"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <a
                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                href="#"
              >
                <img
                  className="d-block mx-auto"
                  src="/img/shop/brands/03.png"
                  style={{ width: "150px" }}
                  alt="Brand"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <a
                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                href="#"
              >
                <img
                  className="d-block mx-auto"
                  src="/img/shop/brands/04.png"
                  style={{ width: "150px" }}
                  alt="Brand"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <a
                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                href="#"
              >
                <img
                  className="d-block mx-auto"
                  src="/img/shop/brands/05.png"
                  style={{ width: "150px" }}
                  alt="Brand"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <a
                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                href="#"
              >
                <img
                  className="d-block mx-auto"
                  src="/img/shop/brands/06.png"
                  style={{ width: "150px" }}
                  alt="Brand"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <a
                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                href="#"
              >
                <img
                  className="d-block mx-auto"
                  src="/img/shop/brands/07.png"
                  style={{ width: "150px" }}
                  alt="Brand"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <a
                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                href="#"
              >
                <img
                  className="d-block mx-auto"
                  src="/img/shop/brands/08.png"
                  style={{ width: "150px" }}
                  alt="Brand"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <a
                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                href="#"
              >
                <img
                  className="d-block mx-auto"
                  src="/img/shop/brands/09.png"
                  style={{ width: "150px" }}
                  alt="Brand"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <a
                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                href="#"
              >
                <img
                  className="d-block mx-auto"
                  src="/img/shop/brands/10.png"
                  style={{ width: "150px" }}
                  alt="Brand"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <a
                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                href="#"
              >
                <img
                  className="d-block mx-auto"
                  src="/img/shop/brands/11.png"
                  style={{ width: "150px" }}
                  alt="Brand"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <a
                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                href="#"
              >
                <img
                  className="d-block mx-auto"
                  src="/img/shop/brands/12.png"
                  style={{ width: "150px" }}
                  alt="Brand"
                />
              </a>
            </div>
          </div>
        </section>
        {/*<!-- Product widgets-->*/}
        <section className="container pt-md-3 pb-4 pb-md-5 mb-lg-2">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-2 py-3">
              <div className="widget">
                <h3 className="widget-title">Bestsellers</h3>
                <div className="d-flex align-items-center pb-2 border-bottom">
                  <Link
                    href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                    passHref
                  >
                    <a className="d-block">
                      <img
                        src="/img/shop/cart/widget/01.jpg"
                        width="64"
                        alt="Product"
                      />
                    </a>
                  </Link>
                  <div className="ps-2">
                    <h6 className="widget-product-title">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>Women Colorblock Sneakers</a>
                      </Link>
                    </h6>
                    <div className="widget-product-meta">
                      <span className="text-accent me-2">
                        $150.<small>00</small>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center py-2 border-bottom">
                  <Link
                    href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                    passHref
                  >
                    <a className="d-block">
                      <img
                        src="/img/shop/cart/widget/02.jpg"
                        width="64"
                        alt="Product"
                      />
                    </a>
                  </Link>
                  <div className="ps-2">
                    <h6 className="widget-product-title">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>TH Jeans City Backpack</a>
                      </Link>
                    </h6>
                    <div className="widget-product-meta">
                      <span className="text-accent me-2">
                        $79.<small>50</small>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center py-2 border-bottom">
                  <Link
                    href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                    passHref
                  >
                    <a className="d-block">
                      <img
                        src="/img/shop/cart/widget/03.jpg"
                        width="64"
                        alt="Product"
                      />
                    </a>
                  </Link>
                  <div className="ps-2">
                    <h6 className="widget-product-title">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>3-Color Sun Stash Hat</a>
                      </Link>
                    </h6>
                    <div className="widget-product-meta">
                      <span className="text-accent me-2">
                        $22.<small>50</small>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center py-2">
                  <Link
                    href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                    passHref
                  >
                    <a className="d-block">
                      <img
                        src="/img/shop/cart/widget/04.jpg"
                        width="64"
                        alt="Product"
                      />
                    </a>
                  </Link>
                  <div className="ps-2">
                    <h6 className="widget-product-title">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>Cotton Polo Regular Fit</a>
                      </Link>
                    </h6>
                    <div className="widget-product-meta">
                      <span className="text-accent me-2">
                        $9.<small>00</small>
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mb-0">...</p>
                <Link href="/shop-grid-ls" passHref>
                  <a className="fs-sm">
                    View more
                    <i className="ci-arrow-right fs-xs ms-1"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2 py-3">
              <div className="widget">
                <h3 className="widget-title">New arrivals</h3>
                <div className="d-flex align-items-center pb-2 border-bottom">
                  <Link
                    href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                    passHref
                  >
                    <a className="d-block">
                      <img
                        src="/img/shop/widget/02.jpg"
                        width="64"
                        alt="Product"
                      />
                    </a>
                  </Link>
                  <div className="ps-2">
                    <h6 className="widget-product-title">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>Cap with Appliqué</a>
                      </Link>
                    </h6>
                    <div className="widget-product-meta">
                      <span className="text-accent me-2">
                        $15.<small>99</small>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center py-2 border-bottom">
                  <Link
                    href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                    passHref
                  >
                    <a className="d-block">
                      <img
                        src="/img/shop/widget/01.jpg"
                        width="64"
                        alt="Product"
                      />
                    </a>
                  </Link>
                  <div className="ps-2">
                    <h6 className="widget-product-title">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>Girl&#39;s T-shirt with Motif</a>
                      </Link>
                    </h6>
                    <div className="widget-product-meta">
                      <span className="text-accent me-2">
                        $14.<small>50</small>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center py-2 border-bottom">
                  <Link
                    href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                    passHref
                  >
                    <a className="d-block">
                      <img
                        src="/img/shop/widget/03.jpg"
                        width="64"
                        alt="Product"
                      />
                    </a>
                  </Link>
                  <div className="ps-2">
                    <h6 className="widget-product-title">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>Leather Platform Sandals</a>
                      </Link>
                    </h6>
                    <div className="widget-product-meta">
                      <span className="text-accent me-2">
                        $78.<small>00</small>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center py-2">
                  <Link
                    href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                    passHref
                  >
                    <a className="d-block">
                      <img
                        src="/img/shop/widget/04.jpg"
                        width="64"
                        alt="Product"
                      />
                    </a>
                  </Link>
                  <div className="ps-2">
                    <h6 className="widget-product-title">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>Regular Fit Cotton Shirt</a>
                      </Link>
                    </h6>
                    <div className="widget-product-meta">
                      <span className="text-accent me-2">
                        $17.<small>99</small>
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mb-0">...</p>
                <Link href="/shop-grid-ls" passHref>
                  <a className="fs-sm">
                    View more
                    <i className="ci-arrow-right fs-xs ms-1"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 d-none d-lg-block">
              <Link href="/shop-grid-ls" passHref>
                <a className="d-block">
                  <img
                    className="d-block rounded-3"
                    src="/img/home/banners/v-banner.jpg"
                    alt="Promo banner"
                  />
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-md-6">
              <Link href="/blog-list-sidebar" passHref>
                <a className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-primary">
                  <div className="card-body text-center">
                    <i className="ci-edit h3 mt-2 mb-4 text-primary"></i>
                    <h3 className="h5 mb-1">Read the blog</h3>
                    <p className="text-muted fs-sm">
                      Latest store, fashion news and trends
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-md-6">
              <a
                className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-accent"
                href="#"
              >
                <div className="card-body text-center">
                  <i className="ci-instagram h3 mt-2 mb-4 text-accent"></i>
                  <h3 className="h5 mb-1">Follow on Instagram</h3>
                  <p className="text-muted fs-sm">#ShopWithCartzilla</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </>
    </FashionLayout>
  );
}
