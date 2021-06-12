export const ruleNoEmpty = (type, name) => {
  if (type.length === 0) {
    return `${name} is required`;
  }
  return undefined;
};

export const ruleTwoWords = (type, name) => {
  const words = type.split(" ");
  if (!words[1]) {
    return `${name} needs to consist first and last name`;
  }
  return undefined;
};

export const ruleNoSpecialCharacters = (type) => {
  const noSpecialCharacters = /[^a-zA-Z ]/gm;
  if (noSpecialCharacters.test(type)) {
    return `No special characters are allowed`;
  }
  return undefined;
};

export const ruleEmail = (type) => {
  const validEmail = /[@.]/gm;
  if (!validEmail.test(type)) {
    return `Valid email address is required`;
  }
  return undefined;
};

export const ruleNumbers = (type) => {
  const validNumbers = /^[0-9 ]+$/;
  if (!validNumbers.test(type)) {
    return `Only numbers are allowed`;
  }
  return undefined;
};
