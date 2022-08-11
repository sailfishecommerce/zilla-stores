/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SocialIcon from "@/components/Icons/SocialIcon";

export default function FoodDeliveryFooter() {
  return (
    <>
      <footer className="footer bg-darker pt-5">
        <div className="container pt-2">
          <div className="row pb-2">
            <div className="col-lg-2 col-sm-4 pb-2 mb-4">
              <div className="mt-n1">
                <a className="d-inline-block align-middle" href="#">
                  <img
                    className="d-block mb-4"
                    src="/img/footer-logo-light.png"
                    width="117"
                    alt="Bandicoot"
                  />
                </a>
              </div>
              <div className="btn-group dropdown disable-autohide">
                <button
                  className="btn btn-outline-light border-light btn-sm dropdown-toggle px-2"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <img
                    className="me-2"
                    src="/img/flags/en.png"
                    width="20"
                    alt="English"
                  />
                  Eng / $
                </button>
                <ul className="dropdown-menu my-1">
                  <li className="dropdown-item">
                    <select className="form-select form-select-sm">
                      <option value="usd">$ USD</option>
                      <option value="eur">€ EUR</option>
                      <option value="ukp">£ UKP</option>
                      <option value="jpy">¥ JPY</option>
                    </select>
                  </li>
                  <li>
                    <a className="dropdown-item pb-1" href="#">
                      <img
                        className="me-2"
                        src="/img/flags/fr.png"
                        width="20"
                        alt="Français"
                      />
                      Français
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item pb-1" href="#">
                      <img
                        className="me-2"
                        src="/img/flags/de.png"
                        width="20"
                        alt="Deutsch"
                      />
                      Deutsch
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <img
                        className="me-2"
                        src="/img/flags/it.png"
                        width="20"
                        alt="Italiano"
                      />
                      Italiano
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4">
              <div className="widget widget-links widget-light pb-2 mb-4">
                <h3 className="widget-title text-light">Join us</h3>
                <ul className="widget-list">
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Careers
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Restaurants
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Become a Courier
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4">
              <div className="widget widget-links widget-light pb-2 mb-4">
                <h3 className="widget-title text-light">Let us help you</h3>
                <ul className="widget-list">
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Help Center
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Support
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4">
              <SocialIcon className="bs-light" />
            </div>
            <div className="col-lg-4 col-sm-8">
              <div className="widget pb-2 mb-4">
                <h3 className="widget-title text-light pb-1">
                  Download our app
                </h3>
                <div className="d-flex flex-wrap">
                  <a
                    className="btn-market btn-apple border border-light me-3 mb-2"
                    href="#"
                    role="button"
                  >
                    <span className="btn-market-subtitle">Download on the</span>
                    <span className="btn-market-title">App Store</span>
                  </a>
                  <a
                    className="btn-market btn-google border border-light mb-2"
                    href="#"
                    role="button"
                  >
                    <span className="btn-market-subtitle">Download on the</span>
                    <span className="btn-market-title">Google Play</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-light mt-md-2 mb-3" />
          <div className="d-md-flex justify-content-between pt-4 pb-1">
            <div className="pb-4 fs-xs text-light opacity-50 text-center text-md-start">
              © All rights reserved. Made by{" "}
              <a
                className="text-light"
                href="#https://Bandicoot.studio/"
                target="_blank"
                rel="noreferrer"
              >
                Bandicoot Studio
              </a>
            </div>
            <div className="widget widget-links widget-light pb-4">
              <ul className="widget-list d-flex flex-wrap justify-content-center justify-content-md-start">
                <li className="widget-list-item ms-4">
                  <a className="widget-list-link fs-ms" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li className="widget-list-item ms-4">
                  <a className="widget-list-link fs-ms" href="#">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="widget-list-item ms-4">
                  <a className="widget-list-link fs-ms" href="#">
                    Cookies Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="handheld-toolbar">
        <div className="d-table table-layout-fixed w-100">
          <a
            className="d-table-cell handheld-toolbar-item"
            href="#signin-modal"
            data-bs-toggle="modal"
          >
            <span className="handheld-toolbar-icon">
              <i className="ci-user"></i>
            </span>
            <span className="handheld-toolbar-label">Account</span>
          </a>
          <a
            className="d-table-cell handheld-toolbar-item"
            href="javascript:void(0)"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            //onclick="window.scrollTo(0, 0)"
          >
            <span className="handheld-toolbar-icon">
              <i className="ci-menu"></i>
            </span>
            <span className="handheld-toolbar-label">Menu</span>
          </a>
          <Link href="/food-delivery-cart" passHref>
            <a className="d-table-cell handheld-toolbar-item">
              <span className="handheld-toolbar-icon">
                <i className="ci-cart"></i>
                <span className="badge bg-primary rounded-pill ms-1">3</span>
              </span>
              <span className="handheld-toolbar-label">$24.00</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
