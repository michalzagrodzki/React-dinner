export const shortenList = (list) => {
  return list.slice(0, 2);
};

export const removeSelectedItems = (list, keys) => {
  const arrayWithoutOmittedKeys = list.filter((item) => {
    return keys.indexOf(item) < 0 ? item : undefined;
  });
  return arrayWithoutOmittedKeys;
};
