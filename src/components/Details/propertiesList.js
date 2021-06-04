import React from "react";

const PropertiesList = (props) => {
  const { list } = props;
  if (!list) {
    return null;
  }
  return list.map((item, index) => (
    <div key={index}>
      <p>{item.label}</p>
      <p>{item.value}</p>
    </div>
  ));
};

export { PropertiesList };
