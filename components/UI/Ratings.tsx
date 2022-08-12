interface Props {
  rate: number;
}

export default function RatingStar({ rate }: Props) {
  const ratingRemainder = rate % 1;
  const ratingValue = Math.floor(rate);
  const unfilledStars = 5 - Number(ratingValue);
  const numberOfunfilledStars =
    ratingRemainder > 0 ? unfilledStars - 1 : unfilledStars;
  const filledStarsArray = new Array(ratingValue).fill(0);
  const unfilledStarsArray = new Array(numberOfunfilledStars).fill(0);

  return (
    <div className="star-rating">
      {filledStarsArray.map((_, index) => (
        <i key={index} className="star-rating-icon ci-star-filled active"></i>
      ))}
      {ratingRemainder > 0 && (
        <i className="star-rating-icon ci-star-half active"></i>
      )}

      {unfilledStarsArray.map((_, index) => (
        <i key={index} className="star-rating-icon ci-star"></i>
      ))}
    </div>
  );
}
