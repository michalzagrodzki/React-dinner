import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { ArrowIcon } from "./arrowIcon";

const BackLink = (props) => {
  BackLink.propTypes = {
    home: PropTypes.bool,
  };
  const { home } = props;
  const history = useHistory();
  if (home) {
    return null;
  }
  return (
    <div className={"link__back"}>
      <button onClick={() => history.goBack(-1)}>
        <ArrowIcon />
      </button>
    </div>
  );
};

export { BackLink };
