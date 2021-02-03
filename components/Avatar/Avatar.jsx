import Image from "next/image";
import PropTypes from "prop-types";

function Avatar(props) {
  const { photo, name, className } = props;
  return (
    <Image
      objectFit="cover"
      layout="intrinsic"
      src={photo}
      quality={50}
      width={140}
      height={140}
      alt={name}
      className={className}
    />
  );
}
Avatar.defaultProps = {
  photo: "",
  name: "",
  className: "",
};

Avatar.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default Avatar;
