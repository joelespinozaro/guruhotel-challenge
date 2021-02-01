import Image from 'next/Image';
import Link from 'next/link';

import DirectionIcon from './Icons/DirectionIcon';
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
              width={22}
              height={22}
              fill="#bbb"
            />
          )}
          <h2 className="business-wrap__body--title">{name}</h2>
          <div className="business-wrap__body--phone">
            <div>
              <PhoneIcon width={15} height={15} />
            </div>
            <span>{phone ? phone : 'phone not registered'}</span>
          </div>
          <address className="business-wrap__body--address">
            <div>
              <DirectionIcon width={15} height={15} />
            </div>
            <span> {location.formatted_address}</span>
          </address>
          <div className="business-wrap__body--raiting">
            <div>
              <Rating ratingValue={rating} />
            </div>
            <span>({review_count})</span>
          </div>
        </div>
      </section>
    </Link>
  );
}
