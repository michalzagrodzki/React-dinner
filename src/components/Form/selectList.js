import React from "react";
import PropTypes from "prop-types";
import { SelectItem } from "./selectItem";

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
  function handleSelect(value) {
    onSelect(value);
  }
  return (
    <div>
      <div className={"details__ingredients__header"}>
        <p>Please select ingredients to your dinner</p>
      </div>
      <div className={"details__ingredients__container"}>
        {availableIngredients.map((item, index) => (
          <SelectItem
            key={item._id}
            ingredient={item}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
};
