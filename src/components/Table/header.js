import React from "react";
import { Row } from "./row";

const transformIntoKeysList = (list) => {
  if (!list && list.length < 1) {
    return [];
  }
  return Object.keys(list[0]);
};

const Header = (props) => {
  const columns = transformIntoKeysList(props.items);
  if (!columns) {
    return null;
  }
  return (
    <thead>
      <Row columns={columns} header />
    </thead>
  );
};

export { Header };
