import Link from "next/link";
import PropTypes from "prop-types";

import ContentGroup from "./ContentGroup";
import BusinessContent from "./BusinessContent";
import BusinessImage from "./BusinessImage";
import BusinessViewed from "./BusinessViewed";

import Rating from "./Rating";

function Business({ business }) {
  const {
    id,
    name,
    photos,
    location,
    review_count,
    rating,
    phone,
    isViewed,
  } = business;
  return (
    <Link href={`/business/${encodeURIComponent(id)}`}>
      <section className="list-wrap-item">
        <BusinessImage photos={photos} name={name} />
        <div className="business-wrap__body">
          <BusinessViewed isViewed={isViewed} />
          <h2 className="business-wrap__body--title">{name}</h2>
          <ContentGroup
            location={location}
            phone={phone}
            className="business-wrap__body--item"
          />
          <BusinessContent
            className="business-wrap__body--raiting"
            icon={<Rating ratingValue={rating} />}
          >
            ({review_count})
          </BusinessContent>
        </div>
      </section>
    </Link>
  );
}

Business.propTypes = {
  business: PropTypes.object.isRequired,
};

export default Business;
