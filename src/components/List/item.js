import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Header } from "./itemHeader";
import { Property } from "./itemProperty";

const Item = (props) => {
  Item.propTypes = {
    item: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    calories: PropTypes.string.isRequired,
  };
  const { id, title, price, weight, calories } = props.item;
  if (!props.item) {
    return null;
  }
  return (
    <Link
      to={{
        pathname: `/details/${id}`,
      }}
    >
      <div className={"list__item"}>
        <Header title={title} price={price} />
        <div className={"row"}>
          <Property label={"weight"} value={weight} />
          <Property label={"calories"} value={calories} />
        </div>
      </div>
    </Link>
  );
};

export { Item };
