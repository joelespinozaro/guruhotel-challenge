const BusinessContent = ({ children, icon, className }) => (
  <div className={className}>
    <div>{icon}</div>
    <span>{children}</span>
  </div>
);
export default BusinessContent;
