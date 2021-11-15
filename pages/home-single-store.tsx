/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import SingleStoreLayout from "../layout/SingleStoreLayout";

const CustomerReviewCarousel = dynamic(
  () => import("../component/Carousel/CustomerReviewCarousel"),
  {
    ssr: false,
  }
);
const ElectronicsRelatedProduct = dynamic(
  () => import("../component/Carousel/ElectronicsRelatedProduct"),
  {
    ssr: false,
  }
);

export default function HomeSingleStore() {
  return (
    <SingleStoreLayout title="Home Single Store">
      <>
        <section
          className="bg-position-top-center bg-repeat-0 pt-5 pb-5 py-md-10"
          style={{
            backgroundImage: "url(img/home/mono-product/hero-bg.jpg)",
          }}
        >
          <div className="container pt-4 mb-3 mb-lg-0">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-8 offset-lg-1">
                <h5 className="text-light fw-normal">
                  Wireless Bluetooth Headphones
                </h5>
                <h1 className="text-light mb-5">
                  Enjoy the music like never before
                </h1>
                <div className="d-flex align-items-center mb-5">
                  <a className="btn btn-primary me-grid-gutter" href="#">
                    <i className="ci-cart fs-lg me-2"></i>
                    Add to Cart
                  </a>
                  <span className="h4 mb-0 text-light fw-normal">
                    $329.<small>99</small>
                  </span>
                </div>
                <ul className="list-unstyled text-light mb-0">
                  <li className="d-flex">
                    <i className="ci-bluetooth-circle h5 fw-normal text-light me-2"></i>
                    <div className="ps-1">Wireless connection</div>
                  </li>
                  <li className="d-flex">
                    <i className="ci-sound-waves h5 fw-normal text-light me-2"></i>
                    <div className="ps-1">Best in class sound</div>
                  </li>
                  <li className="d-flex">
                    <i className="ci-battery h5 fw-normal text-light me-2"></i>
                    <div className="ps-1">Up to 40 hours battery life</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*<!-- Color options-->*/}
        <section className="container py-5">
          <div className="row align-items-center py-3 py-md-4">
            <div className="col-sm-6">
              <div
                className="mb-5 mb-sm-0 text-center text-sm-start"
                id="colorOptions"
              >
                <div
                  className="radio-tab-pane active"
                  id="color-1"
                  role="tabpanel"
                >
                  <img
                    className="d-block mx-auto"
                    src="/img/home/mono-product/colors/color-option01.jpg"
                    alt="Color 1"
                  />
                </div>
                <div className="radio-tab-pane" id="color-2" role="tabpanel">
                  <img
                    className="d-block mx-auto"
                    src="/img/home/mono-product/colors/color-option02.jpg"
                    alt="Color 1"
                  />
                </div>
                <div className="radio-tab-pane" id="color-3" role="tabpanel">
                  <img
                    className="d-block mx-auto"
                    src="/img/home/mono-product/colors/color-option03.jpg"
                    alt="Color 1"
                  />
                </div>
                <div className="radio-tab-pane" id="color-4" role="tabpanel">
                  <img
                    className="d-block mx-auto"
                    src="/img/home/mono-product/colors/color-option04.jpg"
                    alt="Color 1"
                  />
                </div>
                <div className="radio-tab-pane" id="color-5" role="tabpanel">
                  <img
                    className="d-block mx-auto"
                    src="/img/home/mono-product/colors/color-option05.jpg"
                    alt="Color 1"
                  />
                </div>
                <div className="radio-tab-pane" id="color-6" role="tabpanel">
                  <img
                    className="d-block mx-auto"
                    src="/img/home/mono-product/colors/color-option06.jpg"
                    alt="Color 1"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 text-center text-sm-start">
              <h2 className="pb-4">Choose your style</h2>
              <div className="mb-3">
                <span
                  className="fs-sm text-heading fw-medium me-1"
                  id="colorOptionText"
                >
                  Rose Gold
                </span>
                <span>
                  &nbsp;&mdash;&nbsp; $329.<small>99</small>
                </span>
              </div>
              <div className="mb-4 pb-2">
                <div className="form-check form-option form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="color"
                    id="color1"
                    data-bs-label="colorOptionText"
                    value="Rose Gold"
                    checked
                  />
                  <label
                    className="form-option-label rounded-circle"
                    htmlFor="color1"
                    data-bs-toggle="radioTab"
                    data-bs-target="#color-1"
                    data-bs-parent="#colorOptions"
                  >
                    <span
                      className="form-option-color rounded-circle"
                      style={{
                        backgroundColor: "#e8c4c0",
                      }}
                    ></span>
                  </label>
                </div>
                <div className="form-check form-option form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="color"
                    id="color2"
                    data-bs-label="colorOptionText"
                    value="Satin Silver"
                  />
                  <label
                    className="form-option-label rounded-circle"
                    htmlFor="color2"
                    data-bs-toggle="radioTab"
                    data-bs-target="#color-2"
                    data-bs-parent="#colorOptions"
                  >
                    <span
                      className="form-option-color rounded-circle"
                      style={{
                        backgroundColor: "#e6e6e6",
                      }}
                    ></span>
                  </label>
                </div>
                <div className="form-check form-option form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="color"
                    id="color3"
                    data-bs-label="colorOptionText"
                    value="Satin Gold"
                  />
                  <label
                    className="form-option-label rounded-circle"
                    htmlFor="color3"
                    data-bs-toggle="radioTab"
                    data-bs-target="#color-3"
                    data-bs-parent="#colorOptions"
                  >
                    <span
                      className="form-option-color rounded-circle"
                      style={{
                        backgroundColor: "#f7e6d5",
                      }}
                    ></span>
                  </label>
                </div>
                <div className="form-check form-option form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="color"
                    id="color4"
                    data-bs-label="colorOptionText"
                    value="Club Navy"
                  />
                  <label
                    className="form-option-label rounded-circle"
                    htmlFor="color4"
                    data-bs-toggle="radioTab"
                    data-bs-target="#color-4"
                    data-bs-parent="#colorOptions"
                  >
                    <span
                      className="form-option-color rounded-circle"
                      style={{
                        backgroundImage:
                          "url(img/home/mono-product/colors/color-radio01.png)",
                      }}
                    ></span>
                  </label>
                </div>
                <div className="form-check form-option form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="color"
                    id="color5"
                    data-bs-label="colorOptionText"
                    value="Club White"
                  />
                  <label
                    className="form-option-label rounded-circle"
                    htmlFor="color5"
                    data-bs-toggle="radioTab"
                    data-bs-target="#color-5"
                    data-bs-parent="#colorOptions"
                  >
                    <span
                      className="form-option-color rounded-circle"
                      style={{
                        backgroundImage:
                          "url(img/home/mono-product/colors/color-radio02.png)",
                      }}
                    ></span>
                  </label>
                </div>
                <div className="form-check form-option form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="color"
                    id="color6"
                    data-bs-label="colorOptionText"
                    value="Club Red"
                  />
                  <label
                    className="form-option-label rounded-circle"
                    htmlFor="color6"
                    data-bs-toggle="radioTab"
                    data-bs-target="#color-6"
                    data-bs-parent="#colorOptions"
                  >
                    <span
                      className="form-option-color rounded-circle"
                      style={{
                        backgroundImage:
                          "url(img/home/mono-product/colors/color-radio03.png)",
                      }}
                    ></span>
                  </label>
                </div>
              </div>
              <a className="btn btn-primary" href="#">
                <i className="ci-cart fs-lg me-2"></i>Add to Cart
              </a>
            </div>
          </div>
        </section>
        {/*<!-- Divider-->*/}
        <hr className="mt-md-2 mb-5" />
        {/*<!-- Gallery-->*/}
        <section className="container pt-2 pt-md-5">
          <h2 className="text-center mb-5">Product gallery</h2>
          <div className="row gallery">
            <div className="col-md-4 col-sm-6 mb-grid-gutter">
              <a
                className="gallery-item rounded-3"
                href="/img/home/mono-product/gallery/01.jpg"
                data-bs-sub-html='&lt;h6 class="fs-sm text-light"&gt;Gallery image caption&lt;/h6&gt;'
              >
                <img
                  src="/img/home/mono-product/gallery/th01.jpg"
                  alt="Gallery thumbnail"
                />
                <span className="gallery-item-caption">
                  Gallery image caption
                </span>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 mb-grid-gutter">
              <a
                className="gallery-item rounded-3"
                href="/img/home/mono-product/gallery/02.jpg"
                data-bs-sub-html='&lt;h6 class="fs-sm text-light"&gt;Gallery image caption&lt;/h6&gt;'
              >
                <img
                  src="/img/home/mono-product/gallery/th02.jpg"
                  alt="Gallery thumbnail"
                />
                <span className="gallery-item-caption">
                  Gallery image caption
                </span>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 mb-grid-gutter">
              <a
                className="gallery-item rounded-3"
                href="/img/home/mono-product/gallery/03.jpg"
                data-bs-sub-html='&lt;h6 class="fs-sm text-light"&gt;Gallery image caption&lt;/h6&gt;'
              >
                <img
                  src="/img/home/mono-product/gallery/th03.jpg"
                  alt="Gallery thumbnail"
                />
                <span className="gallery-item-caption">
                  Gallery image caption
                </span>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 mb-grid-gutter">
              <a
                className="gallery-item rounded-3"
                href="/img/home/mono-product/gallery/04.jpg"
                data-bs-sub-html='&lt;h6 class="fs-sm text-light"&gt;Gallery image caption&lt;/h6&gt;'
              >
                <img
                  src="/img/home/mono-product/gallery/th04.jpg"
                  alt="Gallery thumbnail"
                />
                <span className="gallery-item-caption">
                  Gallery image caption
                </span>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 mb-grid-gutter">
              <a
                className="gallery-item rounded-3"
                href="/img/home/mono-product/gallery/05.jpg"
                data-bs-sub-html='&lt;h6 class="fs-sm text-light"&gt;Gallery image caption&lt;/h6&gt;'
              >
                <img
                  src="/img/home/mono-product/gallery/th05.jpg"
                  alt="Gallery thumbnail"
                />
                <span className="gallery-item-caption">
                  Gallery image caption
                </span>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 mb-grid-gutter">
              <a
                className="gallery-item rounded-3"
                href="/img/home/mono-product/gallery/06.jpg"
                data-bs-sub-html='&lt;h6 class="fs-sm text-light"&gt;Gallery image caption&lt;/h6&gt;'
              >
                <img
                  src="/img/home/mono-product/gallery/th06.jpg"
                  alt="Gallery thumbnail"
                />
                <span className="gallery-item-caption">
                  Gallery image caption
                </span>
              </a>
            </div>
          </div>
        </section>
        {/*<!-- Product details-->*/}
        <section className="container py-4 py-md-5 my-2">
          <h2 className="text-center mb-4 mb-md-5 pb-2">Product details</h2>
          <div className="row text-center text-sm-start">
            <div className="col-lg-5 col-md-6 col-sm-8 offset-lg-2 offset-md-1">
              <h5 className="mb-3">Highlights</h5>
              <p className="fs-sm mb-3 mb-lg-4 pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit animasurel. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <h5 className="mb-3">Battery</h5>
              <ul className="list-unstyled fs-sm mb-3 mb-lg-4 pb-1">
                <li>Up to 40 hours life</li>
                <li>Fast charging technology</li>
                <li>Charge via Micro-USB cable</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 offset-md-1">
              <h5 className="mb-3">General</h5>
              <ul className="list-unstyled fs-sm mb-3 mb-lg-4 pb-1">
                <li>Height: 7.8 in / 19.8 cm</li>
                <li>Weight: 7.58 oz / 215 g</li>
                <li>Form factor: On ear</li>
              </ul>
              <h5 className="mb-3">Connectivity</h5>
              <ul className="list-unstyled fs-sm mb-3 mb-lg-4 pb-1">
                <li>Wireless Bluetooth</li>
                <li>Micro-USD port</li>
              </ul>
              <h5 className="mb-3">Other features</h5>
              <ul className="list-unstyled fs-sm mb-3 mb-lg-4 pb-1">
                <li>Lightweight</li>
                <li>Durable materials</li>
              </ul>
            </div>
          </div>
        </section>
        {/*<!-- Reviews-->*/}
        <section
          className="bg-secondary pt-5"
          style={{ paddingBottom: "300px" }}
        >
          <div className="container py-md-5 mb-4 pt-3 pb-4">
            <h2 className="text-center mb-4 mb-md-5 pb-2">Customer reviews</h2>
            <CustomerReviewCarousel />
          </div>
        </section>
        {/*<!-- Related products-->*/}
        <section
          className="container position-relative"
          style={{ marginTop: "-300px", zIndex: 5 }}
        >
          <div className="bg-light rounded-3 shadow-lg py-5 px-grid-gutter">
            <h2 className="text-center pt-2 pt-md-4 mb-4 mb-md-5">
              You may also like
            </h2>
            <ElectronicsRelatedProduct />
          </div>
        </section>
      </>
    </SingleStoreLayout>
  );
}
