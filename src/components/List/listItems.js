import React from "react";
import PropTypes from "prop-types";
import { Item } from "./item";

const ListItems = (props) => {
  ListItems.propTypes = {
    items: PropTypes.array.isRequired,
  };
  const { items } = props;
  if (!items) {
    return null;
  }
  return (
    <ul className={"list__container"}>
      {items.map((item, index) => (
        <li key={index}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
};

export { ListItems };
