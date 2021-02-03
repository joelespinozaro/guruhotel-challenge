import HourItem from "../HourItem";
import PropTypes from "prop-types";

function HourList(props) {
  const { hours } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "20px 0 20px 0",
        backgroundColor: "white",
      }}
    >
      <h2 style={{ fontSize: 25, margin: 0 }}>Our schedule</h2>

      {hours.open.map((item, index) => (
        <HourItem key={index} item={item} />
      ))}
    </div>
  );
}

HourList.propTypes = {
  hours: PropTypes.object.isRequired,
};

export default HourList;
