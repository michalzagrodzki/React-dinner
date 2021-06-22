import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  Header.propTypes = {
    data: PropTypes.object.isRequired,
  };

  const { title, price } = props.data;
  if (!title && !price) {
    return null;
  }

  return (
    <div className={"details__header"}>
      <h2>{title}</h2>
      <h4>{price}</h4>
    </div>
  );
};

export { Header };
