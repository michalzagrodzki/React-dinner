import React from "react";
import PropTypes from "prop-types";
import { Header } from "./itemHeader";
import { Property } from "./itemProperty";

const Item = (props) => {
  Item.propTypes = {
    item: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    calories: PropTypes.string.isRequired,
  };
  const { title, price, weight, calories } = props.item;
  if (!props.item) {
    return null;
  }
  return (
    <div className={"list__item"}>
      <Header title={title} price={price} />
      <div className={"row"}>
        <Property label={"weight"} value={weight} />
        <Property label={"calories"} value={calories} />
      </div>
    </div>
  );
};

export { Item };
