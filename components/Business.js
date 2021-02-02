import Image from 'next/image';
import Link from 'next/link';

import DirectionIcon from './Icons/DirectionIcon';
import BusinessContent from './BusinessContent';
import PhoneIcon from './Icons/PhoneIcon';
import EyeIcon from './Icons/EyeIcon';
import Rating from './Rating';

export default function Business({ business }) {
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
        <div className="business-wrap__body">
          {isViewed && (
            <EyeIcon
              className="business-wrap__body--viewed"
              fill="#bbb"
            />
          )}
          <h2 className="business-wrap__body--title">{name}</h2>
          <BusinessContent
            className="business-wrap__body--phone"
            icon={<PhoneIcon />}
          >
            {phone ? phone : 'phone not registered'}
          </BusinessContent>
          <BusinessContent
            className="business-wrap__body--address"
            icon={<DirectionIcon />}
          >
            {location.formatted_address}
          </BusinessContent>
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
