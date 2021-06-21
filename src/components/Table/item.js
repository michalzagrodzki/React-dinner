import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Item = (props) => {
  Item.propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    header: PropTypes.bool.isRequired,
  };
  const { value: item, id, header } = props;
  if (!item) {
    return null;
  }
  if (header) {
    return <th>{item}</th>;
  }
  return (
    <td>
      <Link
        to={{
          pathname: `/details/${id}`,
        }}
      >
        {item}
      </Link>
    </td>
  );
};

export { Item };
