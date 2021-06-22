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
  return (
    <div className={"details__properties__container"}>
      {list.map((item, index) => (
        <div key={index} className={"details__properties__item"}>
          <label>{item.label}</label>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export { PropertiesList };
