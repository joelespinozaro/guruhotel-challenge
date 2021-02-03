import PropTypes from "prop-types";
import Avatar from "../Avatar";
import BusinessContent from "../BusinessContent";
import SolidStarIcon from "../Icons/SolidStarIcon";
function ReviewItem(props) {
  const { review } = props;
  return (
    <>
      <section className="list-wrap-item no-animation">
        <Avatar
          className="review_img"
          photo={review.user.image_url}
          name={review.user.name}
        />
        <div className="business-wrap__body">
          <h2 className="business-wrap__body--title">
            {review.user.name}
            <BusinessContent
              icon={<SolidStarIcon />}
              className="review__raiting"
            >
              ({review.rating})
            </BusinessContent>
          </h2>

          <span>{review.text}</span>
        </div>
      </section>
    </>
  );
}

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewItem;
