/* eslint-disable @next/next/no-img-element */
import SocialIcon from "@/components/Icons/SocialIcon";

export default function GroceryFooter() {
  return (
    <footer className="footer bg-dark pt-5">
      <div className="px-lg-3 pt-2 pb-4">
        <div className="mx-auto px-3" style={{ maxWidth: "80rem" }}>
          <div className="row">
            <div className="col-xl-2 col-lg-3 col-sm-4 pb-2 mb-4">
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
            <div className="col-xl-3 col-lg-4 col-sm-4">
              <div className="widget widget-links widget-light pb-2 mb-4">
                <h3 className="widget-title text-light">Product catalog</h3>
                <ul className="widget-list">
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Special offers
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Bakery
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Fruits and Vegetables
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Dairy and Eggs
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Meat and Poultry
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Fish and Seafood
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Sauces and Spices
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Canned Food and Oil
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Alcoholic Beverages
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Soft Drinks and Juice
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Packets, Cereals and Poultry
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Frozen
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Personal hygiene
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Kitchenware
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-4">
              <div className="widget widget-links widget-light pb-2 mb-4">
                <h3 className="widget-title text-light">Company</h3>
                <ul className="widget-list">
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      About us
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Store locator
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Careers at Bandicoot
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Contacts
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Help center
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Actions and News
                    </a>
                  </li>
                </ul>
              </div>
              <SocialIcon className="bs-light" />
            </div>
            <div className="col-xl-4 col-sm-8">
              <div className="widget pb-2 mb-4">
                <h3 className="widget-title text-light pb-1">Stay informed</h3>
                <form
                  className="subscription-form validate"
                  action="#https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=29ca296126"
                  method="post"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                  noValidate
                >
                  <div className="input-group flex-nowrap">
                    <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                    <input
                      className="form-control rounded-start"
                      type="email"
                      name="EMAIL"
                      placeholder="Your email"
                      required
                    />
                    <button
                      className="btn btn-primary"
                      type="submit"
                      name="subscribe"
                    >
                      Subscribe*
                    </button>
                  </div>
                  {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
                  <div
                    style={{
                      position: "absolute",
                      left: "-5000px",
                    }}
                    aria-hidden={true}
                  >
                    <input
                      className="subscription-form-antispam"
                      type="text"
                      name="b_c7103e2c981361a6639545bd5_29ca296126"
                      tabIndex={-1}
                    />
                  </div>
                  <div className="form-text text-light opacity-50">
                    *Subscribe to our newsletter to receive early discount
                    offers, updates and new products info.
                  </div>
                  <div className="subscription-status"></div>
                </form>
              </div>
              <div className="widget pb-2 mb-4">
                <h3 className="widget-title text-light pb-1">
                  Download our app
                </h3>
                <div className="d-flex flex-wrap">
                  <div className="me-2 mb-2">
                    <a className="btn-market btn-apple" href="#" role="button">
                      <span className="btn-market-subtitle">
                        Download on the
                      </span>
                      <span className="btn-market-title">App Store</span>
                    </a>
                  </div>
                  <div className="mb-2">
                    <a className="btn-market btn-google" href="#" role="button">
                      <span className="btn-market-subtitle">
                        Download on the
                      </span>
                      <span className="btn-market-title">Google Play</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-darker px-lg-3 py-3">
        <div
          className="d-sm-flex justify-content-between align-items-center mx-auto px-3"
          style={{ maxWidth: "80rem" }}
        >
          <div className="fs-xs text-light opacity-50 text-center text-sm-start py-3">
            © All rights reserved. Made by{" "}
            <a
              className="text-light"
              href="#https://createx.studio/"
              target="_blank"
              rel="noreferrer"
            >
              Bandicoot Studio
            </a>
          </div>
          <div className="py-3">
            <img
              className="d-block mx-auto mx-sm-start"
              src="/img/cards-alt.png"
              width="187"
              alt="Payment methods"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
