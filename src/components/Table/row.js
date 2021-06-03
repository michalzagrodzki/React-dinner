import React from "react";
import { Items } from "./items";

const Row = (props) => {
  const { columns, header } = props;
  if (!props.columns) {
    return null;
  }
  return (
    <tr>
      <Items list={columns} header={header} />
    </tr>
  );
};

export { Row };
