import React from "react";

const InputList = (props) => {
  const { onInputChange } = props;
  if (!props) {
    return null;
  }
  const EMPTY_VALUE = "";
  const list = Object.entries(props)
    .map(([key, value]) => {
      if (value === null) {
        value = EMPTY_VALUE;
      }
      return {
        name: key,
        value: value,
      };
    })
    .filter((input) => {
      return input.value === EMPTY_VALUE;
    });
  return list.map((input, index) => (
    <div key={index}>
      <label>{input.name}</label>
      <input
        name={input.name}
        value={input.value}
        type="text"
        onChange={onInputChange}
      />
    </div>
  ));
};

export { InputList };
