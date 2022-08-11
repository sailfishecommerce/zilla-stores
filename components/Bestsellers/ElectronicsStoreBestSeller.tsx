/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function ElectronicsStoreBestSeller() {
  return (
    <section className="container pb-4 pb-md-5">
      <div className="row">
        {/*<!-- Bestsellers-->*/}
        <div className="col-md-4 col-sm-6 mb-2 py-3">
          <div className="widget">
            <h3 className="widget-title">Bestsellers</h3>
            <div className="d-flex align-items-center pb-2 border-bottom">
              <Link href="/shop-single-v2" passHref>
                <a className="d-block flex-shrink-0">
                  <img
                    src="/img/shop/cart/widget/05.jpg"
                    width="64"
                    alt="Product"
                  />
                </a>
              </Link>
              <div className="ps-2">
                <h6 className="widget-product-title">
                  <Link href="/shop-single-v2" passHref>
                    <a>Wireless Bluetooth Headphones</a>
                  </Link>
                </h6>
                <div className="widget-product-meta">
                  <span className="text-accent">
                    $259.<small>00</small>
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center py-2 border-bottom">
              <Link href="/shop-single-v2" passHref>
                <a className="d-block flex-shrink-0">
                  <img
                    src="/img/shop/cart/widget/06.jpg"
                    width="64"
                    alt="Product"
                  />
                </a>
              </Link>
              <div className="ps-2">
                <h6 className="widget-product-title">
                  <Link href="/shop-single-v2" passHref>
                    <a>Cloud Security Camera</a>
                  </Link>
                </h6>
                <div className="widget-product-meta">
                  <span className="text-accent">
                    $122.<small>00</small>
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center py-2 border-bottom">
              <Link href="/shop-single-v2" passHref>
                <a className="d-block flex-shrink-0">
                  <img
                    src="/img/shop/cart/widget/07.jpg"
                    width="64"
                    alt="Product"
                  />
                </a>
              </Link>
              <div className="ps-2">
                <h6 className="widget-product-title">
                  <Link href="/shop-single-v2" passHref>
                    <a>Android Smartphone S10</a>
                  </Link>
                </h6>
                <div className="widget-product-meta">
                  <span className="text-accent">
                    $799.<small>00</small>
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center py-2">
              <Link href="/shop-single-v2" passHref>
                <a className="d-block flex-shrink-0">
                  <img
                    src="/img/shop/cart/widget/08.jpg"
                    width="64"
                    alt="Product"
                  />
                </a>
              </Link>
              <div className="ps-2">
                <h6 className="widget-product-title">
                  <Link href="/shop-single-v2" passHref>
                    <a>Android Smart TV Box</a>
                  </Link>
                </h6>
                <div className="widget-product-meta">
                  <span className="text-accent">
                    $67.<small>00</small>
                  </span>
                  <del className="text-muted fs-xs">
                    $90.<small>43</small>
                  </del>
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
        <div className="col-md-4 col-sm-6 mb-2 py-3">
          <div className="widget">
            <h3 className="widget-title">New arrivals</h3>
            <div className="d-flex align-items-center pb-2 border-bottom">
              <Link href="/shop-single-v2" passHref>
                <a className="d-block flex-shrink-0">
                  <img src="/img/shop/widget/06.jpg" width="64" alt="Product" />
                </a>
              </Link>
              <div className="ps-2">
                <h6 className="widget-product-title">
                  <Link href="/shop-single-v2" passHref>
                    <a>Monoblock Desktop PC</a>
                  </Link>
                </h6>
                <div className="widget-product-meta">
                  <span className="text-accent">
                    $1,949.<small>00</small>
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center py-2 border-bottom">
              <Link href="/shop-single-v2" passHref>
                <a className="d-block flex-shrink-0">
                  <img src="/img/shop/widget/07.jpg" width="64" alt="Product" />
                </a>
              </Link>
              <div className="ps-2">
                <h6 className="widget-product-title">
                  <Link href="/shop-single-v2" passHref>
                    <a>Laserjet Printer All-in-One</a>
                  </Link>
                </h6>
                <div className="widget-product-meta">
                  <span className="text-accent">
                    $428.<small>60</small>
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center py-2 border-bottom">
              <Link href="/shop-single-v2" passHref>
                <a className="d-block flex-shrink-0">
                  <img src="/img/shop/widget/08.jpg" width="64" alt="Product" />
                </a>
              </Link>
              <div className="ps-2">
                <h6 className="widget-product-title">
                  <Link href="/shop-single-v2" passHref>
                    <a>Console Controller Charger</a>
                  </Link>
                </h6>
                <div className="widget-product-meta">
                  <span className="text-accent">
                    $14.<small>97</small>
                  </span>
                  <del className="text-muted fs-xs">
                    $16.<small>47</small>
                  </del>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center py-2">
              <Link href="/shop-single-v2" passHref>
                <a className="d-block flex-shrink-0">
                  <img src="/img/shop/widget/09.jpg" width="64" alt="Product" />
                </a>
              </Link>
              <div className="ps-2">
                <h6 className="widget-product-title">
                  <Link href="/shop-single-v2" passHref>
                    <a>Smart Watch Series 5, Aluminium</a>
                  </Link>
                </h6>
                <div className="widget-product-meta">
                  <span className="text-accent">
                    $349.<small>99</small>
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
        <div className="col-md-4 col-sm-6 mb-2 py-3">
          <div className="widget">
            <h3 className="widget-title">Top rated</h3>
            <div className="d-flex align-items-center pb-2 border-bottom">
              <Link href="/shop-single-v2" passHref>
                <a className="d-block flex-shrink-0">
                  <img src="/img/shop/widget/10.jpg" width="64" alt="Product" />
                </a>
              </Link>
              <div className="ps-2">
                <h6 className="widget-product-title">
                  <Link href="/shop-single-v2" passHref>
                    <a>Android Smartphone S9</a>
                  </Link>
                </h6>
                <div className="widget-product-meta">
                  <span className="text-accent">
                    $749.<small>99</small>
                  </span>
                  <del className="text-muted fs-xs">
                    $859.<small>99</small>
                  </del>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center py-2 border-bottom">
              <Link href="/shop-single-v2" passHref>
                <a className="d-block flex-shrink-0">
                  <img src="/img/shop/widget/11.jpg" width="64" alt="Product" />
                </a>
              </Link>
              <div className="ps-2">
                <h6 className="widget-product-title">
                  <Link href="/shop-single-v2" passHref>
                    <a>Wireless Bluetooth Headphones</a>
                  </Link>
                </h6>
                <div className="widget-product-meta">
                  <span className="text-accent">
                    $428.<small>60</small>
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center py-2 border-bottom">
              <Link href="/shop-single-v2" passHref>
                <a className="d-block flex-shrink-0">
                  <img src="/img/shop/widget/12.jpg" width="64" alt="Product" />
                </a>
              </Link>
              <div className="ps-2">
                <h6 className="widget-product-title">
                  <Link href="/shop-single-v2" passHref>
                    <a>360 Degrees Camera</a>
                  </Link>
                </h6>
                <div className="widget-product-meta">
                  <span className="text-accent">
                    $98.<small>75</small>
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center py-2">
              <Link href="/shop-single-v2" passHref>
                <a className="d-block flex-shrink-0">
                  <img src="/img/shop/widget/13.jpg" width="64" alt="Product" />
                </a>
              </Link>
              <div className="ps-2">
                <h6 className="widget-product-title">
                  <Link href="/shop-single-v2" passHref>
                    <a>Digital Camera 40MP</a>
                  </Link>
                </h6>
                <div className="widget-product-meta">
                  <span className="text-accent">
                    $210.<small>00</small>
                  </span>
                  <del className="text-muted fs-xs">
                    $249.<small>00</small>
                  </del>
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
      </div>
    </section>
  );
}
