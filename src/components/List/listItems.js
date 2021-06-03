import React from "react";

const ListItems = (props) => {
  const items = props.items;
  if (!props.items) {
    return null;
  }
  return items.map((item, index) => (
    <li key={index}>
      <p>{item.title}</p>
      <p>{item.price}</p>
      <p>{item.weight}</p>
      <p>{item.calories}</p>
    </li>
  ));
};

export { ListItems };
