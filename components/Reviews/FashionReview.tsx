/* eslint-disable @next/next/no-img-element */

import RatingStar from "@/components/UI/Ratings";
import ReviewsBar from "./ReviewsBar";

interface Props {
  rating: number;
  reviews?: number;
}

export default function FashionReview({ rating, reviews }: Props) {
  return (
    <>
      <div className="border-top border-bottom my-lg-3 py-5">
        <div className="container pt-md-2" id="reviews">
          <div className="row pb-3">
            <div className="col-lg-4 col-md-5">
              {reviews ? <h2 className="h3 mb-4">{reviews} Reviews</h2> : ""}
              {rating > 0 ? (
                <div className="ratings d-flex align-items-center mb-0">
                  <RatingStar rate={rating} />
                  <span className="d-inline-block align-middle ms-2">
                    {rating} Overall rating
                  </span>
                </div>
              ) : (
                ""
              )}
              <p className="fs-sm text-muted">
                Customers recommends this product
              </p>
            </div>
            <ReviewsBar rating={rating} />
          </div>
        </div>
      </div>
    </>
  );
}
