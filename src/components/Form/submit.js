import React from "react";
import PropTypes from "prop-types";

const Submit = (props) => {
  Submit.propTypes = {
    submit: PropTypes.func.isRequired,
  };
  const { submit } = props;
  if (!submit) {
    return null;
  }
  return (
    <button onClick={submit} className={"form__submit"}>
      Post form
    </button>
  );
};

export { Submit };
