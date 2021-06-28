import React from "react";
import PropTypes from "prop-types";
import { ListSwitch as Switch } from "./../Shared/listSwitch";
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
    <div className={"table__container"}>
      <Switch />
      <table>
        <Header items={items} />
        <Body items={items} />
      </table>
    </div>
  );
};

export { Table };
