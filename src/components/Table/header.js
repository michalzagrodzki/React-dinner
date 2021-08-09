import React from "react";
import PropTypes from "prop-types";
import { Row } from "./row";

const transformIntoKeysList = (list) => {
  if (!list && list.length < 1) {
    return [];
  }
  const keysList = Object.keys(list[0]);
  return keysList;
};

const Header = (props) => {
  Header.propTypes = {
    items: PropTypes.array.isRequired,
  };
  const columns = transformIntoKeysList(props.items);
  return (
    <thead className={"table__header"}>
      <Row columns={columns} header />
    </thead>
  );
};

export { Header };
