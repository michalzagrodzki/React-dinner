import React from "react";

const IngredientsList = (props) => {
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
