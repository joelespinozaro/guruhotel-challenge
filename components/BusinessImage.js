import Image from 'next/image';

const BusinessImage = ({ photos, name }) => (
  <div className="business-wrap__img-wrapper">
    <Image
      quality={50}
      width={140}
      height={140}
      objectFit="cover"
      layout="intrinsic"
      className="business-wrap__img-wrapper--img"
      src={photos[0]}
      alt={name}
    />
  </div>
);

export default BusinessImage;
