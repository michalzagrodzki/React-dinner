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
    <div>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};

export { Header };
