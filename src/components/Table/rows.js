import React from "react";
import { Row } from "./row";

const Rows = (props) => {
  const list = props.list;
  if (!list) {
    return null;
  }
  return list.map((row, index) => <Row key={index} columns={row} />);
};

export { Rows };
