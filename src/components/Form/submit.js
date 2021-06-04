import React from "react";

const Submit = (props) => {
  const { submit } = props;
  if (!props) {
    return null;
  }
  return <button onClick={submit}>Post form</button>;
};

export { Submit };
