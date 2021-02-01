import Image from 'next/Image';
import EyeIcon from './Icons/EyeIcon';
import Rating from './Rating';

export default function Business({ business }) {
  const {
    name,
    photos,
    location,
    review_count,
    rating,
    phone,
    isViewed,
  } = business;
  return (
    <section className="list-wrap-item">
      <div className="business-wrap__img-wrapper">
        <Image
          width={140}
          height={140}
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
        <span className="business-wrap__body--phone">
          {phone ? phone : 'No phone number registered'}
        </span>
        <address className="business-wrap__body--address">
          {location.address1}, {location.city}
        </address>
        <section className="business-wrap__body--raiting">
          <small>
            <Rating ratingValue={rating} />
          </small>

          <span>({review_count})</span>
        </section>
      </div>
    </section>
  );
}
