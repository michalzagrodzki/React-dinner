import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { SHARED } from "./../../utils/labels";

const ListSwitch = (props) => {
  ListSwitch.propTypes = {
    list: PropTypes.bool,
  };
  const { list } = props;
  return (
    <div className={"list__switch"}>
      {list ? (
        <Link
          to={{
            pathname: `/table`,
          }}
        >
          <h4>{SHARED.TABLE_LINK_LABEL}</h4>
        </Link>
      ) : (
        <Link
          to={{
            pathname: `/list`,
          }}
        >
          <h4>{SHARED.LIST_LINK_LABEL}</h4>
        </Link>
      )}
    </div>
  );
};

export { ListSwitch };
