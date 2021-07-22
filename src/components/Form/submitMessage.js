import React from "react";
import PropTypes from "prop-types";

export const SubmitMessage = (props) => {
  SubmitMessage.propTypes = {
    message: PropTypes.string,
  };
  const { message } = props;
  if (!message) {
    return null;
  }
  return <p>{message}</p>;
};
