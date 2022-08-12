interface Props {
  rating: number;
}

export default function ReviewsBar({ rating }: Props) {
  const reviewsArray = [
    { count: 5, rating: 40, bg: "#42D697" },
    { count: 4, rating: 20, bg: "#a7e453" },
    { count: 3, rating: 30, bg: "#ffda75" },
    { count: 2, rating: 10, bg: "#fea569" },
    { count: 1, rating: 0, bg: "red" },
  ];
  reviewsArray.filter((rvw) => {
    if (rvw.count === rating) {
      rvw.rating += 80;
    }
  });
  return (
    <div className="col-lg-8 col-md-7">
      {reviewsArray.map((rating) => {
        const ratingPercentage = rating.rating > 100 ? "100" : rating.rating;
        return (
          <div key={rating.count} className="d-flex align-items-center mb-2">
            <div className="text-nowrap me-3">
              <span className="d-inline-block align-middle text-muted">
                {rating.count}
              </span>
              <i className="ci-star-filled fs-xs ms-1"></i>
            </div>
            <div className="w-100">
              <div className="progress" style={{ height: "4px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${rating.rating}%`,
                    backgroundColor: rating.bg,
                  }}
                  aria-valuenow={rating.rating}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <span className="text-muted ms-3">{ratingPercentage}%</span>
          </div>
        );
      })}
    </div>
  );
}
