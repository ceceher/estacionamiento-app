const validate = (value, rules) => {
  let isValid = true;

  for (const rule in rules) {
    switch (rule) {
      case "isRequired":
        isValid = isValid && isRequired(value);
        break;
      case "minLength":
        isValid = isValid && minLength(value, rules[rule]);
        break;
      default:
        break;
    }

    if (!isValid) break;
  }
  return isValid ? 1 : 0;
};

function isRequired(value) {
  return value !== "";
}

function minLength(value, minLength) {
  return value.length >= minLength;
}

export default validate;
