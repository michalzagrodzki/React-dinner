import React from "react";
import PropTypes from "prop-types";

export const SelectList = (props) => {
  SelectList.propTypes = {
    selectedIngredients: PropTypes.array,
    availableIngredients: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
  };
  if (!props) {
    return null;
  }
  console.log("available ingredients");
  console.log(props.availableIngredients);
  const { onSelect } = props;
  const { availableIngredients } = props;
  function handleSelect(event, value) {
    onSelect(event, "value");
  }
  return (
    <div>
      <div className={"details__ingredients__header"}>
        <p>Please select ingredients to your dinner</p>
      </div>
      <div className={"details__ingredients__container"}>
        {availableIngredients.map((item, index) => (
          <div
            key={item._id}
            className={"details__ingredients__item"}
            onClick={handleSelect}
          >
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
