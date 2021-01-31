import EmptyStarIcon from './Icons/EmptyStarIcon';
import HalfStarIcon from './Icons/HalfStarIcon';
import SolidStarIcon from './Icons/SolidStarIcon';

export default function Rating({ ratingValue }) {
  if (!ratingValue) return <></>;
  return (
    <>
      {ratingValue >= 1 ? (
        <SolidStarIcon />
      ) : ratingValue >= 0.5 ? (
        <HalfStarIcon />
      ) : (
        <EmptyStarIcon />
      )}
      {ratingValue >= 2 ? (
        <SolidStarIcon />
      ) : ratingValue >= 1.5 ? (
        <HalfStarIcon />
      ) : (
        <EmptyStarIcon />
      )}
      {ratingValue >= 3 ? (
        <SolidStarIcon />
      ) : ratingValue >= 2.5 ? (
        <HalfStarIcon />
      ) : (
        <EmptyStarIcon />
      )}
      {ratingValue >= 4 ? (
        <SolidStarIcon />
      ) : ratingValue >= 3.5 ? (
        <HalfStarIcon />
      ) : (
        <EmptyStarIcon />
      )}
      {ratingValue >= 5 ? (
        <SolidStarIcon />
      ) : ratingValue >= 4.5 ? (
        <HalfStarIcon />
      ) : (
        <EmptyStarIcon />
      )}
    </>
  );
}
