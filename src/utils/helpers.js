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
