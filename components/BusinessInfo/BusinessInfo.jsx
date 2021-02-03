import PropTypes from "prop-types";
import Avatar from "../Avatar";
import Rating from "../Rating";
import ContentGroup from "../ContentGroup";
import Status from "../Status/Status";

function BusinessInfo(props) {
  const {
    photos,
    name,
    hours,
    rating,
    price,
    location,
    phone,
  } = props;
  return (
    <div className="details-header">
      <div className="details-header__top">
        <div className="details-header__top--container-img">
          <Avatar
            photo={photos[0]}
            name={name}
            className="details-header__top--img"
          />
        </div>
        <h1 className="details-header__top--title">{name}</h1>
        <ContentGroup
          className="details-header__top--details"
          location={location}
          phone={phone}
        />
      </div>
      <div className="details-header__body">
        <div>
          <Rating ratingValue={rating} /> ({rating})
          <span className="details-header__body--price">
            · {price}
          </span>
        </div>
        <Status status={hours[0].is_open_now} />
      </div>
    </div>
  );
}

BusinessInfo.propTypes = {
  photos: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  hours: PropTypes.array.isRequired,
  rating: PropTypes.number,
  price: PropTypes.string,
  location: PropTypes.object.isRequired,
  phone: PropTypes.string.isRequired,
};

export default BusinessInfo;
