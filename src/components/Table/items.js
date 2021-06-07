import React from "react";
import PropTypes from "prop-types";
import { Item } from "./item";

const Items = (props) => {
  Items.propTypes = {
    list: PropTypes.array.isRequired,
    header: PropTypes.bool.isRequired,
  };
  const { list, header } = props;
  if (!list) {
    return null;
  }
  return list.map((value, index) => (
    <Item key={index} value={value} header={header} />
  ));
};

export { Items };
