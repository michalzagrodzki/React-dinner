import React from "react";
import { Row } from "./row";

const Rows = (props) => {
  const { list } = props;
  if (!list) {
    return null;
  }
  return list.map((row, index) => <Row key={index} columns={row} />);
};

export { Rows };
