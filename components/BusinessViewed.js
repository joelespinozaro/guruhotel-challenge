import EyeIcon from './Icons/EyeIcon';
const BusinessViewed = ({ isViewed }) => (
  <>
    {isViewed && (
      <EyeIcon className="business-wrap__body--viewed" fill="#bbb" />
    )}
  </>
);

export default BusinessViewed;
