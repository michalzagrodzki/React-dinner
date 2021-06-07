import React from "react";
import PropTypes from "prop-types";
import { Row } from "./row";

const Rows = (props) => {
  Rows.propTypes = {
    list: PropTypes.array.isRequired,
  };
  const { list } = props;
  if (!list) {
    return null;
  }
  return list.map((row, index) => <Row key={index} columns={row} />);
};

export { Rows };
