/* eslint-disable indent */
import {
  ruleNoEmpty,
  ruleTwoWords,
  ruleNoSpecialCharacters,
  ruleEmail,
  ruleNumbers,
} from "./validationRules";

const validateName = (input) => {
  return (
    ruleNoEmpty(input, "Name") ||
    ruleTwoWords(input, "Name") ||
    ruleNoSpecialCharacters(input)
  );
};

const validateEmail = (input) => {
  return ruleNoEmpty(input, "Email") || ruleEmail(input);
};

const validatePhone = (input) => {
  return ruleNoEmpty(input, "Phone number") || ruleNumbers(input);
};

const validateWeight = (input) => {
  return ruleNoEmpty(input, "Weight") || ruleNumbers(input);
};

const validateCalories = (input) => {
  return ruleNumbers(input);
};

const validateIngredients = (input) => {
  return ruleNoEmpty(input, "Ingredients") || ruleNoSpecialCharacters(input);
};

export const validateInputValue = (errorList, type, value) => {
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

export const isErrors = (state) => {
  return false;
};
