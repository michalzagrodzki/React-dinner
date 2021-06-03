import React from "react";

const IngredientsList = (props) => {
  const items = props.list;
  if (!items) {
    return null;
  }
  return items.map((item, index) => (
    <div key={index}>
      <p>{item.name}</p>
    </div>
  ));
};

export { IngredientsList };
