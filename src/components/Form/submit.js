import React from "react";
import PropTypes from "prop-types";
import { FORM } from "./../utils/labels";

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
      {FORM.SUBMIT_LABEL}
    </button>
  );
};

export { Submit };
