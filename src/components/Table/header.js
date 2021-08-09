import React from "react";
import PropTypes from "prop-types";
import { Row } from "./row";
import { removeSelectedItems } from "./../../utils/helpers";
import { OMITTED_TABLE_KEYS } from "./../../utils/constants";

const transformIntoKeysList = (list) => {
  if (!list && list.length < 1) {
    return [];
  }
  const headerKeys = Object.keys(list[0]);
  console.log("list keys");
  console.log(headerKeys);
  const filterKeys = removeSelectedItems(headerKeys, OMITTED_TABLE_KEYS);
  console.log("filter keys");
  console.log(filterKeys);
  return filterKeys;
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
