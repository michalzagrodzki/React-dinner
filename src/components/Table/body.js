import React from "react";
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
  const items = transformIntoValuesList(props.items);
  if (!items) {
    return null;
  }
  return (
    <tbody>
      <Rows list={items} />
    </tbody>
  );
};

export { Body };
