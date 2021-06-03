import React from "react";
import { Header } from "./header";
import { Body } from "./body";
import { Actions } from "./actions";

const Container = (props) => {
  const item = props.item;
  if (!item) {
    return null;
  }
  return (
    <div>
      <Header data={item} />
      <Body data={item} />
      <Actions id={item.id} />
    </div>
  );
};

export { Container };
