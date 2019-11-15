export const initialFormPayload = {
  email: "",
  password: ""
};

export const initialValidationRules = {
  email: true,
  password: true
};

export const initialState = {
  formPayload: { ...initialFormPayload },
  validationRules: { ...initialValidationRules }
};
