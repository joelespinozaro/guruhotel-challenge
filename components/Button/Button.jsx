import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { onClick } = this.props;
    () => onClick();
  }

  render() {
    const { variant, children, type, role, ariaLabel } = this.props;
    return (
      <button
        type={type}
        role={role}
        className={`btn ${variant}`}
        onClick={() => this.onClick()}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }
}
Button.defaultProps = {
  variant: "",
  role: "button",
  type: "button",
  children: "",
  ariaLabel: "button",
  onClick() {},
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  ariaLabel: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default Button;
