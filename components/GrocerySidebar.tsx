import Link from "next/link";
import SocialIcon from "@/components/Icons/SocialIcon";

export default function GrocerySidebar() {
  return (
    <aside
      className="offcanvas offcanvas-expand w-100 border-end zindex-lg-5 pt-lg-5"
      id="sideNav"
      style={{ maxWidth: "21.875rem" }}
    >
      <div className="pt-2 d-none d-lg-block"></div>
      <ul
        className="nav nav-tabs nav-justified mt-4 mt-lg-5 mb-0"
        role="tablist"
        style={{ minHeight: "3rem" }}
      >
        <li className="nav-item">
          <a
            className="nav-link fw-medium active"
            href="#categories"
            data-bs-toggle="tab"
            role="tab"
          >
            Categories
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link fw-medium"
            href="#menu"
            data-bs-toggle="tab"
            role="tab"
          >
            Menu
          </a>
        </li>
        <li className="nav-item d-lg-none">
          <a
            className="nav-link fs-sm"
            href="#"
            data-bs-dismiss="offcanvas"
            role="tab"
          >
            <i className="ci-close fs-xs me-2"></i>Close
          </a>
        </li>
      </ul>
      <div className="offcanvas-body px-0 pt-3 pb-0" data-simplebar>
        <div className="tab-content">
          {/*<!-- Categories-->*/}
          <div
            className="sidebar-nav tab-pane fade show active"
            id="categories"
            role="tabpanel"
          >
            <div className="widget widget-categories">
              <div className="accordion" id="shop-categories">
                {/*<!-- Special offers-->w*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <a
                      className="nav-link-style d-block fs-md fw-normal py-3"
                      href="#"
                    >
                      <span className="d-flex align-items-center">
                        <i className="ci-discount fs-lg text-danger mt-n1 me-2"></i>
                        Special Offers
                      </span>
                    </a>
                  </h3>
                </div>
                {/*<!-- Bakery-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#bakery"
                      aria-expanded="false"
                      aria-controls="bakery"
                    >
                      <span className="d-flex align-items-center">
                        <i className="ci-bread fs-lg opacity-60 mt-n1 me-2"></i>
                        Bakery
                      </span>
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="bakery"
                    data-bs-parent="#shop-categories"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              View all
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Bread
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Baguette
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Loaves
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Ciabatta
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Wheat bread
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Corn bread
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Rye bread
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Rye wheat bread
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Bagels
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Puff pastry
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Stuffed buns
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Buns, sweet cheese danish
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Pita and Flatbread
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- Fruits and Vegetables-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#fruits"
                      aria-expanded="false"
                      aria-controls="fruits"
                    >
                      <span className="d-flex align-items-center">
                        <i className="ci-apple fs-lg opacity-60 mt-n1 me-2"></i>
                        Fruits and Vegetables
                      </span>
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="fruits"
                    data-bs-parent="#shop-categories"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              View all
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Fruits
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Pears, apples, quinces
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Bananas, pineapples, kiwi
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Citrus
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Peaches, plums, apricots
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Grapes
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Exotic fruits
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Berries
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Vegetables
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Mushrooms
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Fresh greens
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Dried fruits
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- Dairy and Eggs-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#dairy"
                      aria-expanded="false"
                      aria-controls="dairy"
                    >
                      <span className="d-flex align-items-center">
                        <i className="ci-cheese fs-lg opacity-60 mt-n1 me-2"></i>
                        Dairy and Eggs
                      </span>
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="dairy"
                    data-bs-parent="#shop-categories"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              View all
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Milk
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Pasteurized milk
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Condensed milk
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Sterilized milk
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Baked milk
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Powder milk
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Coconut milk
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Cheese
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Hard cheese
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Semi-hard cheese
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Pickled
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Soft cheese
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Cream-cheese
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Sour cream
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Yogurt
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Sour-milk drinks
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Butter and margarine
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Desserts
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Cream
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Eggs
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- Meat and Poultry-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#meat"
                      aria-expanded="false"
                      aria-controls="meat"
                    >
                      <span className="d-flex align-items-center">
                        <i className="ci-ham-leg fs-lg opacity-60 mt-n1 me-2"></i>
                        Meat and Poultry
                      </span>
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="meat"
                    data-bs-parent="#shop-categories"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              View all
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Fresh meat
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Pork
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Beef
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Rabbit
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Chicken
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Turkey
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Lamb
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Duck
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Minced meat
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Frozen ready-to-cook
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Sausages
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Meat delicatessen
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Ham
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Cold boiled pork
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Bacon
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Smoked meat
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Jamon
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Cooled meals
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- Fish and Seafood-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#fish"
                      aria-expanded="false"
                      aria-controls="fish"
                    >
                      <span className="d-flex align-items-center">
                        <i className="ci-fish fs-lg opacity-60 me-2"></i>
                        Fish and Seafood
                      </span>
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="fish"
                    data-bs-parent="#shop-categories"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              View all
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Fresh fish
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Prepared fish
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Light-salted fish
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Marinated fish
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Butter with fish
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Smoked fish
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Dried fish
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Seafood
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Sushi
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- Sauces and Spices-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#sauces"
                      aria-expanded="false"
                      aria-controls="sauces"
                    >
                      <span className="d-flex align-items-center">
                        <i className="ci-fish fs-lg opacity-60 me-2"></i>
                        Sauces and Spices
                      </span>
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="sauces"
                    data-bs-parent="#shop-categories"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              View all
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Mayonnese
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Sauces
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Cooking base
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Mustard
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Soy sauce
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Tomato paste
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Barbecue sauce
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Tartar
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Hot sauces
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Balsamic sauce
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Salad dressing
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Curry sauce
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Garlic sauce
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="#">
                                  Pesto sauce
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Ketchup
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Herbs and spices
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Salt
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- Canned Food and Oil-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#canned"
                      aria-expanded="false"
                      aria-controls="canned"
                    >
                      <span className="d-flex align-items-center">
                        <i className="ci-canned-food fs-lg opacity-60 me-2"></i>
                        Canned Food and Oil
                      </span>
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="canned"
                    data-bs-parent="#shop-categories"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              View all
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Oils and vinegar
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Canned meat
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Canned fish
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Canned fruit
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Canned vegetables
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Salads and pickles
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Olives
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Pate
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Jam, fruit paste, confiture
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Honey
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- Alcoholic Beverages-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#alcoholic"
                      aria-expanded="false"
                      aria-controls="alcoholic"
                    >
                      <span className="d-flex align-items-center">
                        <i className="ci-wine fs-lg opacity-60 me-2"></i>
                        Alcoholic Beverages
                      </span>
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="alcoholic"
                    data-bs-parent="#shop-categories"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              View all
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Beer
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Wine
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Champagne and sparkling wine
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Alcopops
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Hard liquor
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Liquor
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- Soft Drinks and Juice-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#drinks"
                      aria-expanded="false"
                      aria-controls="drinks"
                    >
                      <span className="d-flex align-items-center">
                        <i className="ci-juice fs-lg opacity-60 me-2"></i>
                        Soft Drinks and Juice
                      </span>
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="drinks"
                    data-bs-parent="#shop-categories"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              View all
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Mineral water
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Juice
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Nectar
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Smoothie
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Fruit drincs
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Soda
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Tea
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Coffee
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Ice tea
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Cocoa drinks
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Hot chocolate
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Topping
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- Packets, Cereals-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#packets"
                      aria-expanded="false"
                      aria-controls="packets"
                    >
                      <span className="d-flex align-items-center">
                        <i className="ci-corn fs-lg opacity-60 me-2"></i>
                        Packets, Cereals
                      </span>
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="packets"
                    data-bs-parent="#shop-categories"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              View all
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Pasta
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Cereal
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Flour
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Porridge and muesli
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Snack meals
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              For baking
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Sugar and sweetener
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Soy food
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Supplements
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- Frozen-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#frozen"
                      aria-expanded="false"
                      aria-controls="frozen"
                    >
                      <span className="d-flex align-items-center">
                        <i className="ci-frozen fs-lg opacity-60 me-2"></i>
                        Frozen
                      </span>
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="frozen"
                    data-bs-parent="#shop-categories"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              View all
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Fish
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Meat and poultry
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Salads
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Seafood
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Pizza and breads
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Ready meals
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Fruits
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Vegetables
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Ice-cream
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Frozen bakery
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- Personal hygiene-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#hygiene"
                      aria-expanded="false"
                      aria-controls="hygiene"
                    >
                      <span className="d-flex align-items-center">
                        <i className="ci-toothbrush fs-lg opacity-60 me-2"></i>
                        Personal hygiene
                      </span>
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="hygiene"
                    data-bs-parent="#shop-categories"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              View all
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Oral care
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Cotton pads
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              For ladies
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              For shaving and epilation
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Cosmetic wipes
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Soap
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- Kitchenware-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#kitchenware"
                      aria-expanded="false"
                      aria-controls="kitchenware"
                    >
                      <span className="d-flex align-items-center">
                        <i className="ci-pot fs-lg opacity-60 me-2"></i>
                        Kitchenware
                      </span>
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="kitchenware"
                    data-bs-parent="#shop-categories"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              View all
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Glasses, decanters
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Cookware
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Tableware
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Kitchenware
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Food storage
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link" href="#">
                              Disposable tableware
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- Menu-->*/}
          <div className="sidebar-nav tab-pane fade" id="menu" role="tabpanel">
            <div className="widget widget-categories">
              <div className="accordion" id="shop-menu">
                {/*<!-- Homepages-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#home"
                      aria-expanded="false"
                      aria-controls="home"
                    >
                      Homepages
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="home"
                    data-bs-parent="#shop-menu"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <Link href="/home-fashion-store-v1" passHref>
                              <a className="widget-list-link">
                                Fashion Store v.1
                              </a>
                            </Link>
                          </li>

                          <li className="widget-list-item">
                            <Link href="/home-electronics-store" passHref>
                              <a className="widget-list-link">
                                Electronics Store
                              </a>
                            </Link>
                          </li>

                          <li className="widget-list-item">
                            <Link href="/home-marketplace" passHref>
                              <a className="widget-list-link">
                                Multi-vendor Marketplace
                              </a>
                            </Link>
                          </li>

                          <li className="widget-list-item">
                            <Link href="/home-grocery-store" passHref>
                              <a className="widget-list-link">Grocery Store</a>
                            </Link>
                          </li>

                          <li className="widget-list-item">
                            <Link href="/home-food-delivery" passHref>
                              <a className="widget-list-link">
                                Food Delivery Service
                              </a>
                            </Link>
                          </li>

                          <li className="widget-list-item">
                            <Link href="/home-fashion-store-v2" passHref>
                              <a className="widget-list-link">
                                Fashion Store v.2
                              </a>
                            </Link>
                          </li>

                          <li className="widget-list-item">
                            <Link href="/home-single-store" passHref>
                              <a className="widget-list-link">
                                Single Product/Brand Store
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- Shop-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#shop"
                      aria-expanded="false"
                      aria-controls="shop"
                    >
                      Shop
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="shop"
                    data-bs-parent="#shop-menu"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link fw-medium" href="#">
                              Shop Layouts
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <Link href="/shop-grid-ls" passHref>
                                  <a className="widget-list-link">
                                    Shop Grid - Left Sidebar
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/shop-grid-rs" passHref>
                                  <a className="widget-list-link">
                                    Shop Grid - Right Sidebar
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/shop-grid-ft" passHref>
                                  <a className="widget-list-link">
                                    Shop Grid - Filters on Top
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/shop-list-ls" passHref>
                                  <a className="widget-list-link">
                                    Shop List - Left Sidebar
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/shop-list-rs" passHref>
                                  <a className="widget-list-link">
                                    Shop List - Right Sidebar
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/shop-list-ft" passHref>
                                  <a className="widget-list-link">
                                    Shop List - Filters on Top
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link fw-medium" href="#">
                              Marketplace
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <Link href="/marketplace-category" passHref>
                                  <a className="widget-list-link">
                                    Category Page
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/marketplace-single" passHref>
                                  <a className="widget-list-link">
                                    Single Item Page
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/marketplace-vendor" passHref>
                                  <a className="widget-list-link">
                                    Vendor Page
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/marketplace-cart" passHref>
                                  <a className="widget-list-link">Cart</a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/marketplace-checkout" passHref>
                                  <a className="widget-list-link">Checkout</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link fw-medium" href="#">
                              Grocery Store
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <Link href="/grocery-catalog" passHref>
                                  <a className="widget-list-link">
                                    Product Catalog
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/grocery-single" passHref>
                                  <a className="widget-list-link">
                                    Single Product Page
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/grocery-checkout" passHref>
                                  <a className="widget-list-link">Checkout</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link fw-medium" href="#">
                              Food Delivery
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <Link href="/food-delivery-category" passHref>
                                  <a className="widget-list-link">
                                    Category Page
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/food-delivery-single" passHref>
                                  <a className="widget-list-link">
                                    Single Item (Restaurant)
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/food-delivery-cart" passHref>
                                  <a className="widget-list-link">
                                    Cart (Your Order)
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/food-delivery-checkout" passHref>
                                  <a className="widget-list-link">
                                    Checkout (Address & amp; Payment)
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link fw-medium" href="#">
                              Shop pages
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <Link href="/shop-categories" passHref>
                                  <a className="widget-list-link">
                                    Shop Categories
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/shop-single-v1" passHref>
                                  <a className="widget-list-link">
                                    Product Page v.1
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/shop-single-v2" passHref>
                                  <a className="widget-list-link">
                                    Product Page v.2
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/shop-cart" passHref>
                                  <a className="widget-list-link">Cart</a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/checkout-details" passHref>
                                  <a className="widget-list-link">
                                    Checkout - Details
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/checkout-shipping" passHref>
                                  <a className="widget-list-link">
                                    Checkout - Shipping
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/checkout-payment" passHref>
                                  <a className="widget-list-link">
                                    Checkout - Payment
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/checkout-review" passHref>
                                  <a className="widget-list-link">
                                    Checkout - Review
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/checkout-complete" passHref>
                                  <a className="widget-list-link">
                                    Checkout - Complete
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/order-tracking" passHref>
                                  <a className="widget-list-link">
                                    Order Tracking
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/comparison" passHref>
                                  <a className="widget-list-link">
                                    Product Comparison
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- Account-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#account"
                      aria-expanded="false"
                      aria-controls="account"
                    >
                      Account
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="account"
                    data-bs-parent="#shop-menu"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link fw-medium" href="#">
                              Shop User Account
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <Link href="/account-orders" passHref>
                                  <a className="widget-list-link">
                                    Orders History
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/account-profile" passHref>
                                  <a className="widget-list-link">
                                    Profile Settings
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/account-address" passHref>
                                  <a className="widget-list-link">
                                    Account Addresses
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/account-payment" passHref>
                                  <a className="widget-list-link">
                                    Payment Methods
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/account-wishlist" passHref>
                                  <a className="widget-list-link">Wishlist</a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/account-tickets" passHref>
                                  <a className="widget-list-link">My Tickets</a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/account-single-ticket" passHref>
                                  <a className="widget-list-link">
                                    Single Ticket
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link fw-medium" href="#">
                              Vendor Dashboard
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <Link href="/dashboard-settings" passHref>
                                  <a className="widget-list-link">Settings</a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/dashboard-purchases" passHref>
                                  <a className="widget-list-link">Purchases</a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/dashboard-favorites" passHref>
                                  <a className="widget-list-link">Favorites</a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/dashboard-sales" passHref>
                                  <a className="widget-list-link">Sales</a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/dashboard-products" passHref>
                                  <a className="widget-list-link">Products</a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link
                                  href="/dashboard-add-new-product"
                                  passHref
                                >
                                  <a className="widget-list-link">
                                    Add New Product
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/dashboard-payouts" passHref>
                                  <a className="widget-list-link">Payouts</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="widget-list-item">
                            <Link href="/account-signin" passHref>
                              <a className="widget-list-link">
                                Sign In / Sign Up
                              </a>
                            </Link>
                          </li>
                          <li className="widget-list-item">
                            <Link href="/account-password-recovery" passHref>
                              <a className="widget-list-link">
                                Password Recovery
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- Pages-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#pages"
                      aria-expanded="false"
                      aria-controls="pages"
                    >
                      Pages
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="pages"
                    data-bs-parent="#shop-menu"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <Link href="/about" passHref>
                              <a className="widget-list-link">About Us</a>
                            </Link>
                          </li>
                          <li className="widget-list-item">
                            <Link href="/contacts" passHref>
                              <a className="widget-list-link">Contacts</a>
                            </Link>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link fw-medium" href="#">
                              Help Center
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <Link href="/help-topics" passHref>
                                  <a className="widget-list-link">
                                    Help Topics
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/help-single-topic" passHref>
                                  <a className="widget-list-link">
                                    Single Topic
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/help-submit-request" passHref>
                                  <a className="widget-list-link">
                                    Submit a Req uest
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link fw-medium" href="#">
                              404 Not Found
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <Link href="/404-simple" passHref>
                                  <a className="widget-list-link">
                                    404 - Simple Text
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/404-illustration" passHref>
                                  <a className="widget-list-link">
                                    404 - Illustration
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- Blog-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#blog"
                      aria-expanded="false"
                      aria-controls="blog"
                    >
                      Blog
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="blog"
                    data-bs-parent="#shop-menu"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a className="widget-list-link fw-medium" href="#">
                              Blog List Layouts
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <Link href="/blog-list-sidebar" passHref>
                                  <a className="widget-list-link">
                                    List with Sidebar
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/blog-list" passHref>
                                  <a className="widget-list-link">
                                    List no Sidebar
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link fw-medium" href="#">
                              Blog Grid Layouts
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <Link href="/blog-grid-sidebar" passHref>
                                  <a className="widget-list-link">
                                    Grid with Sidebar
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/blog-grid" passHref>
                                  <a className="widget-list-link">
                                    Grid no Sidebar
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="widget-list-item">
                            <a className="widget-list-link fw-medium" href="#">
                              Single Post Layouts
                            </a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item">
                                <Link href="/blog-single-sidebar" passHref>
                                  <a className="widget-list-link">
                                    Article with Sidebar
                                  </a>
                                </Link>
                              </li>
                              <li className="widget-list-item">
                                <Link href="/blog-single" passHref>
                                  <a className="widget-list-link">
                                    Article no Sidebar
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- Docs-->*/}
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button
                      className="accordion-button collapsed py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#docs"
                      aria-expanded="false"
                      aria-controls="docs"
                    >
                      Docs / Components
                    </button>
                  </h3>
                  <div
                    className="collapse"
                    id="docs"
                    data-bs-parent="#shop-menu"
                  >
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item">
                            <a
                              className="widget-list-link"
                              href="/docs/dev-setup"
                            >
                              Documentation
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a
                              className="widget-list-link"
                              href="/components/typography"
                            >
                              Components
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a
                              className="widget-list-link"
                              href="/docs/changelog"
                            >
                              Changelog
                              <span className="badge bg-success ms-2">
                                v1.4
                              </span>
                            </a>
                          </li>
                          <li className="widget-list-item">
                            <a
                              className="widget-list-link"
                              href="/mailto:contact@createx.studio"
                            >
                              Support
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-footer d-block px-grid-gutter pt-4 pb-4 mb-2">
        <div className="d-flex mb-3">
          <i className="ci-support h4 mb-0 fw-normal text-primary mt-1 me-1"></i>
          <div className="ps-2">
            <div className="text-muted fs-sm">Support</div>
            <a className="nav-link-style fs-md" href="/tel:+100331697720">
              +1 (00) 33 169 7720
            </a>
          </div>
        </div>
        <div className="d-flex mb-3">
          <i className="ci-mail h5 mb-0 fw-normal text-primary mt-1 me-1"></i>
          <div className="ps-2">
            <div className="text-muted fs-sm">Email</div>
            <a
              className="nav-link-style fs-md"
              href="/mailto:customer@example.com"
            >
              customer@example.com
            </a>
          </div>
        </div>
        <SocialIcon className="bs-dark" />
      </div>
    </aside>
  );
}
