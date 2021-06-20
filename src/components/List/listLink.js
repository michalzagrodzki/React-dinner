import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ListLink = (props) => {
  ListLink.propTypes = {
    label: PropTypes.string.isRequired,
  };
  const { label } = props;
  if (!props.label) {
    return null;
  }
  return (
    <div className={"list__link"}>
      <Link
        to={{
          pathname: "/list",
        }}
      >
        <h4>{label}</h4>
      </Link>
    </div>
  );
};

export { ListLink };
