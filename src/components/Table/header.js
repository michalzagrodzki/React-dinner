import React from "react";
import PropTypes from "prop-types";
import { Row } from "./row";

const transformIntoKeysList = (list) => {
  if (!list && list.length < 1) {
    return [];
  }
  return Object.keys(list[0]);
};

const Header = (props) => {
  Header.propTypes = {
    items: PropTypes.array.isRequired,
  };
  const columns = transformIntoKeysList(props.items);
  return (
    <thead>
      <Row columns={columns} header />
    </thead>
  );
};

export { Header };
