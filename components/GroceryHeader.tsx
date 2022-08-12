/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import Logo from "@/components/Logo";
import HeaderCartDropdown from "@/components/Dropdown/HeaderCartDropdown";
import FormattedPrice from "@/components/Price/FormattedPrice";
import useCart from "@/hooks/useCart";

export default function GroceryHeader() {
  const { useCartData } = useCart();
  const { data: cart } = useCartData();

  return (
    <header className="bg-light shadow-sm fixed-top" data-fixed-element>
      <div className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Logo />
          {/*<!-- Search-->*/}
          <div className="input-group d-none d-lg-flex flex-nowrap mx-4">
            <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
            <input
              className="form-control rounded-start w-100"
              type="text"
              placeholder="Search for products"
            />
            <select
              className="form-select flex-shrink-0"
              style={{ width: "14rem" }}
            >
              <option>All categories</option>
              <option>Bakery</option>
              <option>Fruits and Vegetables</option>
              <option>Dairy and Eggs</option>
              <option>Meat and Poultry</option>
              <option>Fish and Seafood</option>
              <option>Sauces and Spices</option>
              <option>Canned Food and Oil</option>
              <option>Alcoholic Beverages</option>
              <option>Soft Drinks and Juice</option>
              <option>Packets, Cereals</option>
              <option>Frozen</option>
              <option>Snaks, Sweets and Chips</option>
              <option>Personal hygiene</option>
              <option>Kitchenware</option>
            </select>
          </div>
          {/*<!-- Toolbar-->*/}
          <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center ms-xl-2">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sideNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a
              className="navbar-tool d-flex d-lg-none"
              href="#searchBox"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="searchBox"
            >
              <span className="navbar-tool-tooltip">Search</span>
              <div className="navbar-tool-icon-box">
                <i className="navbar-tool-icon ci-search"></i>
              </div>
            </a>
            <a className="navbar-tool d-none d-lg-flex" href="#">
              <span className="navbar-tool-tooltip">Wishlist</span>
              <div className="navbar-tool-icon-box">
                <i className="navbar-tool-icon ci-heart"></i>
              </div>
            </a>
            <a
              className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2"
              href="#signin-modal"
              data-bs-toggle="modal"
            >
              <div className="navbar-tool-icon-box">
                <i className="navbar-tool-icon ci-user"></i>
              </div>
              <div className="navbar-tool-text ms-n3">
                <small>Hello, Sign in</small>My Account
              </div>
            </a>
            <div className="navbar-tool dropdown ms-3">
              <Link href="/grocery-checkout" passHref>
                <a className="navbar-tool-icon-box bg-secondary dropdown-toggle">
                  {cart?.items?.length > 0 && (
                    <span className="navbar-tool-label">
                      {cart?.items?.length}
                    </span>
                  )}
                  <i className="navbar-tool-icon ci-cart"></i>
                </a>
              </Link>
              <Link href="/grocery-checkout" passHref>
                <a className="navbar-tool-text">
                  <small>My Cart</small>
                  {cart?.grandTotal ? (
                    <FormattedPrice price={cart?.grandTotal} />
                  ) : (
                    <FormattedPrice price={0} />
                  )}
                </a>
              </Link>
              {cart?.items.length > 0 && (
                <HeaderCartDropdown
                  cart={cart}
                  checkoutLink="/grocery-checkout"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/*<!-- Search collapse-->*/}
      <div className="collapse" id="searchBox">
        <div className="card pt-2 pb-4 border-0 rounded-0">
          <div className="container">
            <div className="input-group">
              <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
              <input
                className="form-control rounded-start"
                type="text"
                placeholder="Search for products"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
