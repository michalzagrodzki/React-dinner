import React from "react";

const Body = (props) => {
  const { weight, calories } = props.data;
  if (!props.data) {
    return null;
  }
  return (
    <div>
      <p>{weight}</p>
      <p>{calories}</p>
    </div>
  );
};

export { Body };
