import React from "react";
import PropTypes from "prop-types";

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
      <h4>{title}</h4>
      <p>{price}</p>
      <p>{weight}</p>
      <p>{calories}</p>
    </div>
  );
};

export { Item };
