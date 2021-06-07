import React from "react";
import PropTypes from "prop-types";

const Item = (props) => {
  Item.propTypes = {
    value: PropTypes.string.isRequired,
    header: PropTypes.bool.isRequired,
  };
  const { value: item, header } = props;
  if (!item) {
    return null;
  }
  if (header) {
    return <th>{item}</th>;
  }
  return <td>{item}</td>;
};

export { Item };
