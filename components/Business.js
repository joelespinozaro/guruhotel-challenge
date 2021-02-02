import Link from 'next/link';

import DirectionIcon from './Icons/DirectionIcon';
import BusinessContent from './BusinessContent';
import BusinessImage from './BusinessImage';
import BusinessViewed from './BusinessViewed';
import PhoneIcon from './Icons/PhoneIcon';

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
        <BusinessImage photos={photos} name={name} />
        <div className="business-wrap__body">
          <BusinessViewed isViewed={isViewed} />
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
