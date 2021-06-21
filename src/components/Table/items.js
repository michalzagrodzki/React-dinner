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
  const ID_POSITION = 0;
  const id = list[ID_POSITION];
  return list.map((value, index) => (
    <Item key={index} id={id} value={value} header={header} />
  ));
};

export { Items };
