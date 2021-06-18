import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  Header.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  };
  const { title, price } = props;
  if (!props.title) {
    return null;
  }
  return (
    <div className={"list__item__header"}>
      <h4>{title}</h4>
      <h6>{price}</h6>
    </div>
  );
};

export { Header };
