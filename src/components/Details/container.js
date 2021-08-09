import React from "react";
import PropTypes from "prop-types";
import { Header } from "./header";
import { Body } from "./body";
import { Actions } from "./actions";

const Container = (props) => {
  Container.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  const { item } = props;
  if (!item) {
    return null;
  }
  const header = (({ title, price }) => ({ title, price }))(item);
  const body = (({ weight, calories, ingredients }) => ({
    weight,
    calories,
    ingredients,
  }))(item);
  const handleAction = function () {
    props.onClick();
  };
  return (
    <div className={"details__container"}>
      <Header data={header} />
      <Body data={body} />
      <Actions onClick={(event) => handleAction(event)} />
    </div>
  );
};

export { Container };
