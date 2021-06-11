const validateName = (input) => {
  return "error";
};

const validateEmail = (input) => {
  return "error";
};

const validatePhone = (input) => {
  return "error";
};

const validateWeight = (input) => {
  return "error";
};

const validateCalories = (input) => {
  return "error";
};

const validateIngredients = (input) => {
  return "error";
};

export const validateByInputType = (errorList, type, value) => {
  switch (type) {
    case "name":
      errorList = { ...errorList, name: validateName(value) };
      break;
    case "email":
      errorList = { ...errorList, email: validateEmail(value) };
      break;
    case "phone":
      errorList = { ...errorList, phone: validatePhone(value) };
      break;
    case "weight":
      errorList = { ...errorList, weight: validateWeight(value) };
      break;
    case "calories":
      errorList = { ...errorList, calories: validateCalories(value) };
      break;
    case "ingredients":
      errorList = { ...errorList, ingredients: validateIngredients(value) };
      break;
    default:
      break;
  }
  return errorList;
};
