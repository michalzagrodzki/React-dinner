import React from "react";

const Item = (props) => {
  const { value: item, header } = props;
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
