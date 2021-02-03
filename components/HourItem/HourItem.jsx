import PropTypes from "prop-types";

const WEEKDAY = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const transformHour = (hour) => {
  const splitted = hour.split("");
  return splitted[0] + splitted[1] + ":" + splitted[2] + splitted[3];
};

function HourItem(props) {
  const { item } = props;
  return (
    <span>
      {WEEKDAY[item.day]}: {transformHour(item.start)} -{" "}
      {transformHour(item.end)}
    </span>
  );
}

HourItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default HourItem;
