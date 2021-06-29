import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FormLink = (props) => {
  FormLink.propTypes = {
    label: PropTypes.string.isRequired,
    caption: PropTypes.string,
  };
  const { label, caption } = props;
  if (!label) {
    return null;
  }
  return (
    <div className={"link__form"}>
      <p>{caption}</p>
      <Link
        to={{
          pathname: "/form",
        }}
      >
        <h1>{label}</h1>
      </Link>
    </div>
  );
};

export { FormLink };
