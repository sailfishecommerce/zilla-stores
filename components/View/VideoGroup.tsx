/* eslint-disable @next/next/no-img-element */

export default function VideoGroup() {
  return (
    <section className="container pb-5 mb-md-3">
      <div className="border rounded-3 p-3">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="bg-secondary p-5 text-center">
              <img
                className="d-block mb-4 mx-auto"
                src="/img/home/yt-logo.png"
                width="120"
                alt="YouTube"
              />
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img
                  className="me-2"
                  src="/img/home/yt-subscribers.png"
                  width="126"
                  alt="YouTube Subscribers"
                />
                <span className="fs-sm">250k+</span>
              </div>
              <a
                className="btn btn-primary border-0 btn-sm mb-3"
                href="#"
                style={{ backgroundColor: "#ff0000" }}
              >
                <i className="ci-add-user me-2"></i>
                Subscribe*
              </a>
              <p className="fs-sm mb-0">
                *View latest gadgets reviews available for purchase in our
                store.
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex flex-wrap justify-content-between align-items-center pt-3 pb-2">
              <h2 className="h4 mb-3">Latest videos from Bandicoot channel</h2>
              <a className="btn btn-outline-accent btn-sm mb-3" href="#">
                More videos
                <i className="ci-arrow-right fs-xs ms-1 me-n1"></i>
              </a>
            </div>
            <div className="row g-0">
              <div className="col-lg-4 col-6 mb-3">
                <a
                  className="d-block text-decoration-0 px-2"
                  href="https://www.youtube.com/embed/vS93u75NnPo"
                  data-bs-toggle="video"
                >
                  <div className="position-relative mb-2">
                    <span className="badge bg-dark position-absolute bottom-0 end-0 mb-2 me-2">
                      6:16
                    </span>
                    <img
                      className="w-100"
                      src="/img/home/video/cover01.jpg"
                      alt="Video cover"
                    />
                  </div>
                  <h6 className="fs-sm pt-1">
                    5 New Cool Gadgets You Must See on Bandicoot - Cheap Budget
                  </h6>
                </a>
              </div>
              <div className="col-lg-4 col-6 mb-3">
                <a
                  className="d-block text-decoration-0 px-2"
                  href="https://www.youtube.com/embed/B6LaYgGogf0"
                  data-bs-toggle="video"
                >
                  <div className="position-relative mb-2">
                    <span className="badge bg-dark position-absolute bottom-0 end-0 mb-2 me-2">
                      7:27
                    </span>
                    <img
                      className="w-100"
                      src="/img/home/video/cover02.jpg"
                      alt="Video cover"
                    />
                  </div>
                  <h6 className="fs-sm pt-1">
                    5 Super Useful Gadgets on Bandicoot You Must Have in 2020
                  </h6>
                </a>
              </div>
              <div className="col-lg-4 col-6 mb-3">
                <a
                  className="d-block text-decoration-0 px-2"
                  href="https://www.youtube.com/embed/kB-ROfRS9V4"
                  data-bs-toggle="video"
                >
                  <div className="position-relative mb-2">
                    <span className="badge bg-dark position-absolute bottom-0 end-0 mb-2 me-2">
                      6:20
                    </span>
                    <img
                      className="w-100"
                      src="/img/home/video/cover03.jpg"
                      alt="Video cover"
                    />
                  </div>
                  <h6 className="fs-sm pt-1">
                    Top 5 New Amazing Gadgets on Bandicoot You Must See
                  </h6>
                </a>
              </div>
              <div className="col-lg-4 col-6 mb-3 d-lg-none">
                <a
                  className="d-block text-decoration-0 px-2"
                  href="https://www.youtube.com/embed/sJK67XXE_Rg"
                  data-bs-toggle="video"
                >
                  <div className="position-relative mb-2">
                    <span className="badge bg-dark position-absolute bottom-0 end-0 mb-2 me-2">
                      6:11
                    </span>
                    <img
                      className="w-100"
                      src="/img/home/video/cover04.jpg"
                      alt="Video cover"
                    />
                  </div>
                  <h6 className="fs-sm fw-bold pt-1">
                    5 Amazing Construction Inventions and Working Tools
                    Available...
                  </h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}