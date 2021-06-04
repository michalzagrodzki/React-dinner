import React from "react";

const InputList = (props) => {
  const { onInputChange } = props;
  if (!props) {
    return null;
  }
  const list = Object.entries(props).map(([key, value]) => {
    if (value === null) {
      value = "";
    }
    return {
      name: key,
      value: value,
    };
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
