import SadIcon from './Icons/sadIcon';

export const NotFound = ({ message }) => (
  <div className="notFound-wrap">
    <div className="notFound-wrap__title">{message}</div>
    <SadIcon width={22} height={22} />
  </div>
);
