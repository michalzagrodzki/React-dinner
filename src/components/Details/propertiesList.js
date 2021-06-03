import React from "react";

const PropertiesList = (props) => {
  const items = props.list;
  if (!items) {
    return null;
  }
  return items.map((item, index) => (
    <div key={index}>
      <p>{item.label}</p>
      <p>{item.value}</p>
    </div>
  ));
};

export { PropertiesList };
