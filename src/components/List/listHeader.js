import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  Header.propTypes = {
    label: PropTypes.string.isRequired,
  };
  const { label } = props;
  if (!props.label) {
    return null;
  }
  return (
    <div className={"list__header"}>
      <h4>{label}</h4>
    </div>
  );
};

export { Header };
