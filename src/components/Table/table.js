import React from "react";
import { Header } from "./header";
import { Body } from "./body";

const Table = (props) => {
  const items = props.items;
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
