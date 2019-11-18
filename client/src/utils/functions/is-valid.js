export const dynamicFormValidation = (payload, rules) => {
  const keys = Object.keys(payload);
  let next;

  // Checking the input dynamically to valid or invalid with the
  // validation rules, then returning true or false depending
  // on the result
  keys.forEach(key => {
    if (payload[key] === "" || payload[key] === 0) {
      rules[key] = false;
      next = false;
    } else {
      rules[key] = true;
      next = true;
    }
  });

  return {
    next,
    rules
  };
};
