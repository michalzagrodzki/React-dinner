import React from "react";

const Item = (props) => {
  const item = props.value;
  const header = props.header;
  if (!item) {
    return null;
  }
  if (header) {
    return <th>{item}</th>;
  } else {
    return <td>{item}</td>;
  }
};

export { Item };
