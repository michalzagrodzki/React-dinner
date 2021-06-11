import React from "react";
import PropTypes from "prop-types";

const InputList = (props) => {
  InputList.propTypes = {
    onInputChange: PropTypes.func.isRequired,
  };
  if (!props) {
    return null;
  }

  const { onInputChange } = props;
  const VALID_EMPTY_VALUE = "";
  const list = Object.entries(props)
    .map(([key, value]) => {
      if (value === null) {
        value = VALID_EMPTY_VALUE;
      }
      const error = props.errors[key];
      return {
        name: key,
        value: value,
        type: key === "email" ? key : "text",
        error: error,
      };
    })
    .filter((input) => {
      return typeof input.value !== "function";
    });
  return list.map((input, index) => (
    <div key={index}>
      <label>{input.name}</label>
      <input
        name={input.name}
        value={input.value}
        type={input.type}
        onChange={onInputChange}
      />
      <span>{input.error}</span>
    </div>
  ));
};

export { InputList };
