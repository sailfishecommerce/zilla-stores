export default function FashionProductForm() {
  return (
    <form className="mb-grid-gutter mt-4" method="post">
      <div className="mb-3 d-flex align-items-center">
        <select className="form-select me-3" style={{ width: "5rem" }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button
          className="btn btn-primary btn-shadow d-block w-100"
          type="submit"
        >
          <i className="ci-cart fs-lg me-2"></i>
          Add to Cart
        </button>
      </div>
    </form>
  );
}
