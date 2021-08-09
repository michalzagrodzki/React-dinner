export const shortenList = (list) => {
  return list.slice(0, 2);
};

export const removeOmittedKeys = (list, keys) => {
  const listWithoutKeys = list.filter((item) => {
    keys.forEach((element) => {
      delete item[element];
    });
    return item;
  });
  return listWithoutKeys;
};
