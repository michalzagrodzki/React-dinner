import React from "react";
import PropTypes from "prop-types";
import { PropertiesList } from "./propertiesList";
import { IngredientsList } from "./ingredientsList";

const Body = (props) => {
  Body.propTypes = {
    data: PropTypes.object.isRequired,
  };

  const { data } = props;
  if (!data) {
    return null;
  }

  const propertiesList = Object.entries(data)
    .map(([key, value]) => {
      return {
        label: key,
        value: value,
      };
    })
    .filter((item) => {
      return !item.value.length;
    });

  let ingredientsDictionary = Object.entries(data).filter((item) => {
    return item[1].length;
  })[0];
  ingredientsDictionary = ingredientsDictionary
    ? ingredientsDictionary
    : ["", []];

  const ingredientsList = ingredientsDictionary[1];

  return (
    <div>
      <PropertiesList list={propertiesList} />
      <IngredientsList list={ingredientsList} />
    </div>
  );
};

export { Body };
