import React from "react";
import PropTypes from "prop-types";
import { SelectItem } from "./selectItem";
import { markIngredients } from "./../../utils/helpers";

export const SelectList = (props) => {
  SelectList.propTypes = {
    selectedIngredients: PropTypes.array,
    availableIngredients: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
  };
  if (!props) {
    return null;
  }
  const { onSelect } = props;
  const { availableIngredients, selectedIngredients } = props;
  const ingredients = markIngredients(
    availableIngredients,
    selectedIngredients
  );
  function handleSelect(value) {
    onSelect(value);
  }
  return (
    <div>
      <div className={"form__ingredients__header"}>
        <p>Please select ingredients to your dinner</p>
      </div>
      <div className={"form__ingredients__container"}>
        {ingredients.map((item, index) => (
          <SelectItem
            key={item._id}
            ingredient={item}
            onSelect={handleSelect}
            active={item.selected}
          />
        ))}
      </div>
    </div>
  );
};
