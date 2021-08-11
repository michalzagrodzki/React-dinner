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

export function markIngredients(availableList, selectedList) {
  const mappedList = availableList.map((item) => {
    const mappedItem = {
      ...item,
      selected: false,
    };
    return mappedItem;
  });
  if (!selectedList === undefined || selectedList.length === 0) {
    return mappedList;
  }
  selectedList.forEach((selectedItem) => {
    const mappedItemIndex = mappedList
      .map((item) => item._id)
      .indexOf(selectedItem._id);
    mappedList[mappedItemIndex].selected
      ? (mappedList[mappedItemIndex].selected = false)
      : (mappedList[mappedItemIndex].selected = true);
  });
  return mappedList;
}

export function toggleSelectedIngredient(vm, ingredient) {
  const ingredientIndex = vm.state.selectedIngredients
    .map((item) => item._id)
    .indexOf(ingredient._id);
  if (ingredientIndex === -1) {
    vm.setState({
      selectedIngredients: [...vm.state.selectedIngredients, ingredient],
    });
  } else {
    const selectedIngredientsArray = [...vm.state.selectedIngredients];
    selectedIngredientsArray.splice(ingredientIndex, 1);
    vm.setState({
      selectedIngredients: [...selectedIngredientsArray],
    });
  }
  return vm;
}
