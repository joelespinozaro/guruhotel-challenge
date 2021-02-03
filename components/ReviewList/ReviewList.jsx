import ReviewItem from "../ReviewItem";
import PropTypes from "prop-types";

function ReviewList(props) {
  const { reviews, reviewCount } = props;
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Reviews ({reviewCount})</h2>
      {reviews.map((item) => (
        <ReviewItem review={item} key={item.id} />
      ))}
    </div>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
  reviewCount: PropTypes.number,
};

export default ReviewList;
