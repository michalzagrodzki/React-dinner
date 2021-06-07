import React from "react";
import PropTypes from "prop-types";

const PropertiesList = (props) => {
  PropertiesList.propTypes = {
    list: PropTypes.array.isRequired,
  };

  const { list } = props;
  if (!list) {
    return null;
  }
  return list.map((item, index) => (
    <div key={index}>
      <p>{item.label}</p>
      <p>{item.value}</p>
    </div>
  ));
};

export { PropertiesList };
