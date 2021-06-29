import React from "react";
import PropTypes from "prop-types";
import { BackLink } from "./backLink";

const Header = (props) => {
  Header.propTypes = {
    title: PropTypes.string.isRequired,
    caption: PropTypes.string,
    home: PropTypes.bool,
  };
  const { title, caption, home } = props;
  if (!props.title) {
    return null;
  }
  return (
    <div className={"header__container"}>
      <BackLink home={home} />
      <p>{caption}</p>
      <h1>{title}</h1>
    </div>
  );
};

export { Header };
