import React from "react";
import { Item } from "./item";

const ListItems = (props) => {
  const { items } = props;
  if (!props.items) {
    return null;
  }
  return items.map((item, index) => (
    <li key={index}>
      <Item item={item} />
    </li>
  ));
};

export { ListItems };
