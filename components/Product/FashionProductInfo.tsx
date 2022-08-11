import { productType } from "@/types";

interface Props {
  product: productType;
}
export default function FashionProductInfo({ product }: Props) {
  return (
    <div className="accordion mb-4" id="productPanels">
      <div className="accordion-item">
        <h3 className="accordion-header">
          <a
            className="accordion-button"
            href="#productInfo"
            role="button"
            data-bs-toggle="collapse"
            aria-expanded="true"
            aria-controls="productInfo"
          >
            <i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2"></i>
            Product info
          </a>
        </h3>
        <div
          className="accordion-collapse collapse show"
          id="productInfo"
          data-bs-parent="#productPanels"
        >
          <div className="accordion-body">
            {product?.vendor ? (
              <h6 className="fs-md mb-2">
                Vendor: <span className="text-muted">{product?.vendor}</span>
              </h6>
            ) : (
              ""
            )}
            {product?.meta_description ? (
              <>
                <h6 className="fs-md m-0">Highlight</h6>
                <p className="fs-sm">{product?.meta_description}</p>
              </>
            ) : (
              ""
            )}
            {product.product_categories ? (
              <>
                <h6 className="fs-sm m-0">Categories:</h6>
                <ul className="fs-sm ps-4 mb-0">
                  {product.product_categories.map((category) => (
                    <li className="fs-sm" key={category}>
                      {category}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h3 className="accordion-header">
          <a
            className="accordion-button collapsed"
            href="#shippingOptions"
            role="button"
            data-bs-toggle="collapse"
            aria-expanded="true"
            aria-controls="shippingOptions"
          >
            <i className="ci-delivery text-muted lead align-middle mt-n1 me-2"></i>
            Shipping options
          </a>
        </h3>
        <div
          className="accordion-collapse collapse"
          id="shippingOptions"
          data-bs-parent="#productPanels"
        >
          <div className="accordion-body fs-sm">
            <div className="d-flex justify-content-between border-bottom pb-2">
              <div>
                <div className="fw-semibold text-dark">Courier</div>
                <div className="fs-sm text-muted">2 - 4 days</div>
              </div>
              <div>$26.50</div>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <div>
                <div className="fw-semibold text-dark">Local shipping</div>
                <div className="fs-sm text-muted">up to one week</div>
              </div>
              <div>$10.00</div>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <div>
                <div className="fw-semibold text-dark">Flat rate</div>
                <div className="fs-sm text-muted">5 - 7 days</div>
              </div>
              <div>$33.85</div>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <div>
                <div className="fw-semibold text-dark">UPS ground shipping</div>
                <div className="fs-sm text-muted">4 - 6 days</div>
              </div>
              <div>$18.00</div>
            </div>
            <div className="d-flex justify-content-between pt-2">
              <div>
                <div className="fw-semibold text-dark">
                  Local pickup from store
                </div>
                <div className="fs-sm text-muted">&mdash;</div>
              </div>
              <div>$0.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h3 className="accordion-header">
          <a
            className="accordion-button collapsed"
            href="#localStore"
            role="button"
            data-bs-toggle="collapse"
            aria-expanded="true"
            aria-controls="localStore"
          >
            <i className="ci-location text-muted fs-lg align-middle mt-n1 me-2"></i>
            Find in local store
          </a>
        </h3>
        <div
          className="accordion-collapse collapse"
          id="localStore"
          data-bs-parent="#productPanels"
        >
          <div className="accordion-body">
            <select className="form-select">
              <option>Select your country</option>
              <option value="Argentina">Argentina</option>
              <option value="Belgium">Belgium</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Spain">Spain</option>
              <option value="UK">United Kingdom</option>
              <option value="USA">USA</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
