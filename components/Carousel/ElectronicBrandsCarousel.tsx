/* eslint-disable @next/next/no-img-element */
import CarouselWrapper from "./CarouselWrapper";

export default function ElectronicBrandsCarousel() {
  const settings = {
    nav: false,
    controls: false,
    autoplay: true,
    autoplayTimeout: 4000,
    loop: true,
    responsive: {
      "0": { items: 1 },
      "360": { items: 2 },
      "600": { items: 3 },
      "991": { items: 4 },
      "1200": { items: 4 },
    },
  };
  return (
    <section className="container mb-5">
      <div className="tns-carousel border-end electronicsBrandsCarousel">
        <CarouselWrapper onClick={() => {}} settings={settings}>
          <div>
            <a
              className="d-block bg-white border py-4 py-sm-5 px-2"
              href="#"
              style={{ marginRight: "-.0625rem" }}
            >
              <img
                className="d-block mx-auto"
                src="/img/shop/brands/13.png"
                style={{ width: "165px" }}
                alt="Brand"
              />
            </a>
          </div>
          <div>
            <a
              className="d-block bg-white border py-4 py-sm-5 px-2"
              href="#"
              style={{ marginRight: "-.0625rem" }}
            >
              <img
                className="d-block mx-auto"
                src="/img/shop/brands/14.png"
                style={{ width: "165px" }}
                alt="Brand"
              />
            </a>
          </div>
          <div>
            <a
              className="d-block bg-white border py-4 py-sm-5 px-2"
              href="#"
              style={{ marginRight: "-.0625rem" }}
            >
              <img
                className="d-block mx-auto"
                src="/img/shop/brands/17.png"
                style={{ width: "165px" }}
                alt="Brand"
              />
            </a>
          </div>
          <div>
            <a
              className="d-block bg-white border py-4 py-sm-5 px-2"
              href="#"
              style={{ marginRight: "-.0625rem" }}
            >
              <img
                className="d-block mx-auto"
                src="/img/shop/brands/16.png"
                style={{ width: "165px" }}
                alt="Brand"
              />
            </a>
          </div>
          <div>
            <a
              className="d-block bg-white border py-4 py-sm-5 px-2"
              href="#"
              style={{ marginRight: "-.0625rem" }}
            >
              <img
                className="d-block mx-auto"
                src="/img/shop/brands/15.png"
                style={{ width: "165px" }}
                alt="Brand"
              />
            </a>
          </div>
          <div>
            <a
              className="d-block bg-white border py-4 py-sm-5 px-2"
              href="#"
              style={{ marginRight: "-.0625rem" }}
            >
              <img
                className="d-block mx-auto"
                src="/img/shop/brands/18.png"
                style={{ width: "165px" }}
                alt="Brand"
              />
            </a>
          </div>
          <div>
            <a
              className="d-block bg-white border py-4 py-sm-5 px-2"
              href="#"
              style={{ marginRight: "-.0625rem" }}
            >
              <img
                className="d-block mx-auto"
                src="/img/shop/brands/19.png"
                style={{ width: "165px" }}
                alt="Brand"
              />
            </a>
          </div>
          <div>
            <a
              className="d-block bg-white border py-4 py-sm-5 px-2"
              href="#"
              style={{ marginRight: "-.0625rem" }}
            >
              <img
                className="d-block mx-auto"
                src="/img/shop/brands/20.png"
                style={{ width: "165px" }}
                alt="Brand"
              />
            </a>
          </div>
        </CarouselWrapper>
      </div>
    </section>
  );
}
