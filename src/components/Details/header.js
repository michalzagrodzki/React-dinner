import React from "react";

const Header = (props) => {
  const { title, price } = props.data;
  if (!props.data) {
    return null;
  }
  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};

export { Header };
