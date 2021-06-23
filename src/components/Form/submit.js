import React from "react";
import PropTypes from "prop-types";

const SUBMIT_LABEL = "Place your order";

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
      {SUBMIT_LABEL}
    </button>
  );
};

export { Submit };
