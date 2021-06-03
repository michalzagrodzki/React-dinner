import React from "react";
import { Item } from "./item";

const Items = (props) => {
  const { list, header } = props;
  if (!list) {
    return null;
  }
  return list.map((value, index) => (
    <Item key={index} value={value} header={header} />
  ));
};

export { Items };
