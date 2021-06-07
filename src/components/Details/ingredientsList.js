import React from "react";
import PropTypes from "prop-types";

const IngredientsList = (props) => {
  IngredientsList.propTypes = {
    list: PropTypes.array.isRequired,
  };

  const { list } = props;
  if (!list) {
    return null;
  }
  return list.map((item, index) => (
    <div key={index}>
      <p>{item.name}</p>
    </div>
  ));
};

export { IngredientsList };
