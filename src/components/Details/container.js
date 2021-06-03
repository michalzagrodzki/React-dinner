import React from "react";
import { Header } from "./header";
import { Body } from "./body";
import { Actions } from "./actions";

const Container = (props) => {
  const item = props.item;
  if (!item) {
    return null;
  }
  const header = (({ title, price }) => ({ title, price }))(item);
  const body = (({ weight, calories, ingredients }) => ({
    weight,
    calories,
    ingredients,
  }))(item);
  const id = item.id;
  return (
    <div>
      <Header data={header} />
      <Body data={body} />
      <Actions id={id} />
    </div>
  );
};

export { Container };
