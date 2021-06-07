import React from "react";
import PropTypes from "prop-types";
import { Rows } from "./rows";

const transformIntoValuesList = (list) => {
  if (!list && list.length < 1) {
    return [];
  }
  const valuesList = list.map((item) => {
    return Object.values(item);
  });
  return valuesList;
};

const Body = (props) => {
  Body.propTypes = {
    items: PropTypes.array.isRequired,
  };
  const items = transformIntoValuesList(props.items);
  return (
    <tbody>
      <Rows list={items} />
    </tbody>
  );
};

export { Body };
