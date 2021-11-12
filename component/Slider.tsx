/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CarouselWrapper from "./Carousel/CarouselWrapper";

export default function Slider() {
    var settings = {
        controlsText: [
            '<i className="ci-arrow-left"></i>',
            '<i className="ci-arrow-right"></i>',
        ],
        navPosition: "bottom",
        mouseDrag: true,
        speed: 500,
        loop: true,
        autoplayHoverPause: true,
        autoplayButtonOutput: false,
    };
    return (
        //<section className="tns-carousel tns-controls-lg">
        //          <div
        //              className="tns-carousel-inner"
        //              //data-carousel-options='{"mode": "gallery", "responsive": {"0":{"nav":true, "controls": false},"992":{"nav":false, "controls": true}}}'
        //          >
        <CarouselWrapper onClick={() => {}} settings={settings}>
            <div className="px-lg-5" style={{ backgroundColor: "#3aafd2" }}>
                <div className="d-lg-flex justify-content-between align-items-center ps-lg-4">
                    <img
                        className="d-block order-lg-2 me-lg-n5 flex-shrink-0"
                        src="/img/home/hero-slider/01.jpg"
                        alt="Summer Collection"
                    />
                    <div
                        className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1"
                        style={{ maxWidth: "42rem", zIndex: 10 }}
                    >
                        <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                            <h3 className="h2 text-light fw-light pb-1 from-start">
                                Has just arrived!
                            </h3>
                            <h2 className="text-light display-5 from-start delay-1">
                                Huge Summer Collection
                            </h2>
                            <p className="fs-lg text-light pb-3 from-start delay-2">
                                Swimwear, Tops, Shorts, Sunglasses &amp; much
                                more...
                            </p>
                            <div className="d-table scale-up delay-4 mx-auto mx-lg-0">
                                <Link href="/shop-grid-ls" passHref>
                                    <a className="btn btn-primary">
                                        Shop Now
                                        <i className="ci-arrow-right ms-2 me-n1"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-lg-5" style={{ backgroundColor: "#f5b1b0" }}>
                <div className="d-lg-flex justify-content-between align-items-center ps-lg-4">
                    <img
                        className="d-block order-lg-2 me-lg-n5 flex-shrink-0"
                        src="/img/home/hero-slider/02.jpg"
                        alt="Women Sportswear"
                    />
                    <div
                        className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1"
                        style={{ maxWidth: "42rem", zIndex: 10 }}
                    >
                        <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                            <h3 className="h2 text-light fw-light pb-1 from-bottom">
                                Hurry up! Limited time offer.
                            </h3>
                            <h2 className="text-light display-5 from-bottom delay-1">
                                Women Sportswear Sale
                            </h2>
                            <p className="fs-lg text-light pb-3 from-bottom delay-2">
                                Sneakers, Keds, Sweatshirts, Hoodies &amp; much
                                more...
                            </p>
                            <div className="d-table scale-up delay-4 mx-auto mx-lg-0">
                                <Link href="/shop-grid-ls" passHref>
                                    <a className="btn btn-primary">
                                        Shop Now
                                        <i className="ci-arrow-right ms-2 me-n1"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-lg-5" style={{ backgroundColor: "#eba170" }}>
                <div className="d-lg-flex justify-content-between align-items-center ps-lg-4">
                    <img
                        className="d-block order-lg-2 me-lg-n5 flex-shrink-0"
                        src="/img/home/hero-slider/03.jpg"
                        alt="Men Accessories"
                    />
                    <div
                        className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1"
                        style={{ maxWidth: "42rem", zIndex: 10 }}
                    >
                        <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                            <h3 className="h2 text-light fw-light pb-1 from-top">
                                Complete your look with
                            </h3>
                            <h2 className="text-light display-5 from-top delay-1">
                                New Men Accessories
                            </h2>
                            <p className="fs-lg text-light pb-3 from-top delay-2">
                                Hats &amp; Caps, Sunglasses, Bags &amp; much
                                more...
                            </p>
                            <div className="d-table scale-up delay-4 mx-auto mx-lg-0">
                                <a
                                    className="btn btn-primary"
                                    href="shop-grid-ls"
                                >
                                    Shop Now
                                    <i className="ci-arrow-right ms-2 me-n1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CarouselWrapper>
        //</div>
        //</section>
    );
}
