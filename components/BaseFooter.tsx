export default function BaseFooter() {
  return (
    <>
      <footer className="border-top py-5">
        <div className="container text-center pt-3 pt-lg-4">
          <h3 className="fw-light">Still not convinced?</h3>
          <h2 className="pb-4">
            Add premium support and lifetime updates to this.
          </h2>
          <a
            rel="noreferrer"
            className="btn btn-primary btn-lg"
            href="https://bandicoot-limited.vercel.app"
            target="_blank"
          >
            <i className="ci-cart me-2"></i>Buy Bandicoot
          </a>
          <hr className="my-5" />
          <div className="fs-ms text-muted text-center">
            © All rights reserved. Made by
            <a
              rel="noreferrer"
              className="text-muted ms-1"
              href="https://bandicoot-limited.vercel.app"
              target="_blank"
            >
              Bandicoot Studio
            </a>
          </div>
        </div>
      </footer>
      <div className="handheld-toolbar">
        <div className="d-table table-layout-fixed w-100">
          <a
            className="d-table-cell handheld-toolbar-item"
            href="#account-wishlist"
          >
            <span className="handheld-toolbar-icon">
              <i className="ci-heart"></i>
            </span>
            <span className="handheld-toolbar-label">Wishlist</span>
          </a>
          <a
            className="d-table-cell handheld-toolbar-item"
            href="#javascript:void(0)"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            //href="window.scrollTo(0, 0)"
          >
            <span className="handheld-toolbar-icon">
              <i className="ci-menu"></i>
            </span>
            <span className="handheld-toolbar-label">Menu</span>
          </a>
          <a className="d-table-cell handheld-toolbar-item" href="#shop-cart">
            <span className="handheld-toolbar-icon">
              <i className="ci-cart"></i>
              <span className="badge bg-primary rounded-pill ms-1">4</span>
            </span>
            <span className="handheld-toolbar-label">$265.00</span>
          </a>
        </div>
      </div>
      <a className="btn-scroll-top" href="#top" data-scroll>
        <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">
          Top
        </span>
        <i className="btn-scroll-top-icon ci-arrow-up"> </i>
      </a>
    </>
  );
}
