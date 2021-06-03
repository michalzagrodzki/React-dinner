import React from "react";
import { PropertiesList } from "./propertiesList";
import { IngredientsList } from "./ingredientsList";

const Body = (props) => {
  if (!props.data) {
    return null;
  }
  const propertiesList = Object.entries(props.data)
    .map(([key, value]) => {
      return {
        label: key,
        value: value,
      };
    })
    .filter((item) => {
      return !item.value.length;
    });
  const ingredientsList = Object.entries(props.data).filter((item) => {
    return item[1].length;
  })[0][1];
  return (
    <div>
      <PropertiesList list={propertiesList} />
      <IngredientsList list={ingredientsList} />
    </div>
  );
};

export { Body };
