import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  Header.propTypes = {
    title: PropTypes.string.isRequired,
    caption: PropTypes.string,
  };
  const { title, caption } = props;
  if (!props.title) {
    return null;
  }
  return (
    <div className={"header__container"}>
      <p>{caption}</p>
      <h1>{title}</h1>
    </div>
  );
};

export { Header };
