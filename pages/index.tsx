/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import BaseLayout from "@/layout/BaseLayout";
import siteBanners from "@/json/site-banner.json";
import featureHighlights from "@/json/highlight.json";

export default function index() {
  return (
    <BaseLayout title=" Homepage">
      <>
        <section
          className="bg-accent bg-position-center bg-size-cover py-3 py-sm-5"
          style={{
            backgroundImage: "url(img/intro/intro-hero.jpg)",
          }}
        >
          <div className="container py-5">
            <div className="row pt-md-5 pb-lg-5 justify-content-center">
              <div className="col-xl-7 col-lg-8 col-md-10 text-center py-xl-3">
                <h1 className="text-light pb-sm-3">
                  <span className="fw-light">Multipurpose</span> Bootstrap 5
                  <br />
                  E-Commerce <span className="fw-light">Template</span>
                </h1>
                {siteBanners.links.map((link) => (
                  <span
                    key={link.text}
                    className={`d-inline-block text-light fw-light mx-2 ${link.className}`}
                  >
                    {link.text}
                  </span>
                ))}
                <div className="py-4 py-sm-5">
                  <a
                    className="btn btn-primary btn-lg"
                    href="#demos"
                    data-scroll
                  >
                    View Demos
                    <i className="ci-arrow-down-circle ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Demos section*/}
        <section className="container pt-5 pb-3 pb-lg-5" id="demos">
          <div className="text-center pt-md-4 pb-2">
            <h2>
              <span className="fw-light">Explore</span> Bandicoot Demos
            </h2>
            <p className="text-muted">
              Explore the collection of carefully built homepages. More to come
              soon!
            </p>
          </div>
          <div className="row pt-4">
            {siteBanners.banners.map((banner) => (
              <div key={banner.link} className="col-sm-6 mb-4">
                <div className="card product-card-alt">
                  <div className="product-thumb border">
                    <div className="product-card-actions">
                      {banner.link && (
                        <Link href={banner.link} passHref>
                          <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                            <i className="ci-eye"></i>
                          </a>
                        </Link>
                      )}
                    </div>
                    {banner.link && (
                      <Link href={banner.link} passHref>
                        <a className="product-thumb-overlay"></a>
                      </Link>
                    )}
                    <img src={banner.image} alt={banner.name} />
                  </div>
                  <div className="card-body text-center">
                    <h3 className="product-title fs-lg pt-2">
                      {banner.link ? (
                        <Link href={banner.link} passHref>
                          <a>{banner.name}</a>
                        </Link>
                      ) : (
                        banner.name
                      )}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-dark py-5">
          <div className="container py-3 py-lg-4">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-5 pb-4 pb-lg-0">
                <h2 className="text-light">
                  <span className="fw-light">Complete</span> E-Commerce
                  Front-End <span className="fw-light">Solution</span>
                </h2>
                <p className="text-light opacity-70">
                  All you need for your next e-commerce project
                </p>
                <ul className="text-light list-unstyled pt-3">
                  {siteBanners.features.map((feature, index) => (
                    <li key={index}>
                      <i className="ci-check-circle text-success me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-7 offset-xl-1">
                <img
                  src="/img/intro/pages-showcase.jpg"
                  alt="Bandicoot pages"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-secondary py-4">
          <div className="container pt-4 pt-md-0">
            <div className="row align-items-center">
              <div className="col-xl-4 offset-xl-1 col-lg-5 offset-lg-1 col-md-6 text-center text-md-left">
                <span className="badge badge-info fs-sm mb-4">From v1.2</span>
                <h2>
                  <span className="fw-light">Even More</span> Mobile Friendly{" "}
                  <span className="fw-light">Interface</span>
                </h2>
                <p className="text-muted pb-2">
                  New <span className="fw-medium">Toolbar</span> designed
                  specifically for handheld devices to further improve user
                  experience.
                </p>
                <p className="fs-sm">
                  Scan QR code below to test on your device:
                </p>
                <img src="/img/intro/qrcode.png" width="150" alt="QR code" />
              </div>
              <div className="col-md-6">
                <img
                  className="d-block mx-auto"
                  src="/img/intro/handheld-toolbar.jpg"
                  alt="Toolbar"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container py-3 py-lg-4">
            <h2 className="text-center mb-4">
              Bandicoot Feature <span className="fw-light">Highlights</span>
            </h2>
            <div className="row text-center pt-4">
              {featureHighlights.map((highlight) => (
                <div
                  key={highlight.img}
                  className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2"
                >
                  <img
                    className="inline-block mb-3"
                    src={highlight.img}
                    width="90"
                    alt={highlight.title}
                  />
                  <h6>{highlight.title}</h6>
                  <p className="fs-ms text-muted mb-0">{highlight.text}</p>
                </div>
              ))}
            </div>
            <h6 className="text-center">And much more...</h6>
          </div>
        </section>
      </>
    </BaseLayout>
  );
}
