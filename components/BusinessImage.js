import Avatar from "./Avatar";

const BusinessImage = ({ photos, name }) => (
  <div className="business-wrap__img-wrapper">
    <Avatar
      className="business-wrap__img-wrapper--img"
      photo={photos[0]}
      name={name}
    />
  </div>
);

export default BusinessImage;
