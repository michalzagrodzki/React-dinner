import React from "react";
import PropTypes from "prop-types";
import { Header } from "./header";
import { Body } from "./body";

const Table = (props) => {
  Table.propTypes = {
    items: PropTypes.array.isRequired,
  };
  const { items } = props;
  if (!items) {
    return null;
  }
  return (
    <table>
      <Header items={items} />
      <Body items={items} />
    </table>
  );
};

export { Table };
