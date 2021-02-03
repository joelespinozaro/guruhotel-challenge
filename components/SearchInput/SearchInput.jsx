import React from "react";
import PropTypes from "prop-types";

import BaseInput from "../BaseInput";

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function SearchInput(props) {
  const { name, error, variant } = props;
  const variantUpdated = `${variant} ${
    error[name] === true ? "error-input" : ""
  }`;
  return (
    <div className="SearchInput">
      <label id={`lbl-${name}`}>{capitalize(name)}</label>
      <BaseInput {...props} variant={variantUpdated} />
    </div>
  );
}
SearchInput.defaultProps = {
  name: undefined,
};

SearchInput.propTypes = {
  name: PropTypes.string,
};

export default SearchInput;
