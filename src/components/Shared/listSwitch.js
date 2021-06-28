import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TABLE_LINK_LABEL = "Switch to table";
const LIST_LINK_LABEL = "Switch to list";

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
          <h4>{TABLE_LINK_LABEL}</h4>
        </Link>
      ) : (
        <Link
          to={{
            pathname: `/list`,
          }}
        >
          <h4>{LIST_LINK_LABEL}</h4>
        </Link>
      )}
    </div>
  );
};

export { ListSwitch };
