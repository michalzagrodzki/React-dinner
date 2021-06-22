import React from "react";
import PropTypes from "prop-types";

const Property = (props) => {
  Property.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  };
  const { label, value } = props;
  if (!props.value) {
    return null;
  }
  return (
    <div className={"row__item"}>
      <label>{label}</label>
      {label === "weight" ? <p>{value} gr</p> : <p>{value}</p>}
    </div>
  );
};

export { Property };
