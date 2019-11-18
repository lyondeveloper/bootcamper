export const initialFormPayload = {
  email: ""
};

export const initialValidationRules = {
  email: true
};

export const initialState = {
  formPayload: { ...initialFormPayload },
  validationRules: { ...initialValidationRules }
};
