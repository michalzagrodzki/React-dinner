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
  return (
    <div>
      <div className={"details__ingredients__header"}>
        <p>Ingredients</p>
      </div>
      <div className={"details__ingredients__container"}>
        {list.map((item, index) => (
          <div key={index} className={"details__ingredients__item"}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { IngredientsList };
