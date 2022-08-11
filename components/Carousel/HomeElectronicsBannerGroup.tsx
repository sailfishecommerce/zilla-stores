/* eslint-disable @next/next/no-img-element */

export default function HomeElectronicsBannerGroup() {
  return (
    <div className="col-xl-3 order-xl-1 pt-4 mt-3 mt-xl-0 pt-xl-0">
      <div className="table-responsive" data-simplebar>
        <div className="d-flex d-xl-block">
          <a
            className="d-flex align-items-center bg-faded-info rounded-3 pt-2 ps-2 mb-4 me-4 me-xl-0"
            href="#"
            style={{ minWidth: "16rem" }}
          >
            <img
              src="/img/home/banners/banner-sm01.png"
              width="125"
              alt="Banner"
            />
            <div className="py-4 px-2">
              <h5 className="mb-2">
                <span className="fw-light">Next Gen</span>
                <br />
                Video <span className="fw-light">with</span>
                <br />
                360 Cam
              </h5>
              <div className="text-info fs-sm">
                Shop now
                <i className="ci-arrow-right fs-xs ms-1"></i>
              </div>
            </div>
          </a>
          <a
            className="d-flex align-items-center bg-faded-warning rounded-3 pt-2 ps-2 mb-4 me-4 me-xl-0"
            href="#"
            style={{ minWidth: "16rem" }}
          >
            <img
              src="/img/home/banners/banner-sm02.png"
              width="125"
              alt="Banner"
            />
            <div className="py-4 px-2">
              <h5 className="mb-2">
                <span className="fw-light">Top Rated</span>
                <br />
                Gadgets
                <br />
                <span className="fw-light">are on </span>
                Sale
              </h5>
              <div className="text-warning fs-sm">
                Shop now
                <i className="ci-arrow-right fs-xs ms-1"></i>
              </div>
            </div>
          </a>
          <a
            className="d-flex align-items-center bg-faded-success rounded-3 pt-2 ps-2 mb-4"
            href="#"
            style={{ minWidth: "16rem" }}
          >
            <img
              src="/img/home/banners/banner-sm03.png"
              width="125"
              alt="Banner"
            />
            <div className="py-4 px-2">
              <h5 className="mb-2">
                <span className="fw-light">Catch Big</span>
                <br />
                Deals <span className="fw-light">on</span>
                <br />
                Earbuds
              </h5>
              <div className="text-success fs-sm">
                Shop now
                <i className="ci-arrow-right fs-xs ms-1"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
