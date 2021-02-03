import React from "react";
import PropTypes from "prop-types";

class BaseInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueString: "",
    };

    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    const { onChange } = this.props;
    const valueString = e.target.value;
    this.setState({ valueString }, () => onChange(e));
  }

  render() {
    const { valueString } = this.state;
    const {
      placeholder,
      required,
      ariaLabel,
      variant,
      name,
    } = this.props;
    const value = valueString || "";

    return (
      <input
        aria-label={ariaLabel === undefined ? placeholder : ariaLabel}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={this.onChange}
        required={required}
        className={`BaseInput ${variant}`}
      />
    );
  }
}
BaseInput.defaultProps = {
  required: false,
  placeholder: "",
  ariaLabel: undefined,
  name: undefined,
  onChange() {},
};

BaseInput.propTypes = {
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  ariaLabel: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.string,
  name: PropTypes.string,
};

export default BaseInput;
