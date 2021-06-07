import React from "react";
import PropTypes from "prop-types";
import { Items } from "./items";

const Row = (props) => {
  Row.propTypes = {
    columns: PropTypes.array.isRequired,
    header: PropTypes.bool.isRequired,
  };
  const { columns, header } = props;
  if (!columns) {
    return null;
  }
  return (
    <tr>
      <Items list={columns} header={header} />
    </tr>
  );
};

export { Row };
