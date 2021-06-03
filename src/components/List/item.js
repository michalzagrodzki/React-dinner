import React from "react";

const Item = (props) => {
  const item = props.item;
  if (!props.item) {
    return null;
  }
  return (
    <div>
      <p>{item.title}</p>
      <p>{item.price}</p>
      <p>{item.weight}</p>
      <p>{item.calories}</p>
    </div>
  );
};

export { Item };
