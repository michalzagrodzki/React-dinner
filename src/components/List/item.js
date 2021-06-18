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
      <div className={"list__item__header"}>
        <h4>{title}</h4>
        <h6>{price}</h6>
      </div>
      <div className={"row"}>
        <div className={"row__item"}>
          <label>weight</label>
          <p>{weight} gr</p>
        </div>
        <div className={"row__item"}>
          <label>calories</label>
          <p>{calories}</p>
        </div>
      </div>
    </div>
  );
};

export { Item };
