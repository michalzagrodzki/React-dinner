import React from "react";
import PropTypes from "prop-types";

export const SelectItem = (props) => {
  SelectItem.propTypes = {
    ingredient: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
  };
  if (!props) {
    return null;
  }
  const { onSelect } = props;
  const { ingredient } = props;
  function handleSelect() {
    onSelect(ingredient);
  }
  return (
    <div
      key={ingredient._id}
      className={"details__ingredients__item"}
      onClick={handleSelect}
    >
      <p>{ingredient.name}</p>
    </div>
  );
};
