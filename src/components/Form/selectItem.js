import React from "react";
import PropTypes from "prop-types";

export const SelectItem = (props) => {
  SelectItem.propTypes = {
    ingredient: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    active: PropTypes.bool,
  };
  if (!props) {
    return null;
  }
  const { onSelect, ingredient, active } = props;
  function handleSelect() {
    onSelect(ingredient);
  }
  const activeClass = active
    ? "form__ingredients__item form__ingredients__item__active"
    : "form__ingredients__item";
  return (
    <div key={ingredient._id} className={activeClass} onClick={handleSelect}>
      <p>{ingredient.name}</p>
    </div>
  );
};
