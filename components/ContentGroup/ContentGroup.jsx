import PropTypes from "prop-types";
import BusinessContent from "../BusinessContent";
import DirectionIcon from "../Icons/DirectionIcon";
import PhoneIcon from "../Icons/PhoneIcon";

function ContentGroup(props) {
  const { location, phone, className } = props;
  return (
    <div>
      <BusinessContent className={className} icon={<DirectionIcon />}>
        {location.formatted_address}
      </BusinessContent>

      <BusinessContent className={className} icon={<PhoneIcon />}>
        {phone ? phone : "phone not registered"}
      </BusinessContent>
    </div>
  );
}
ContentGroup.propTypes = {
  location: PropTypes.object.isRequired,
  phone: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ContentGroup;
