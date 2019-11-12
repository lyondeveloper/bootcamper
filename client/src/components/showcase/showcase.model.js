export const initialValidationRules = {
  milesFrom: true,
  zipcode: true
};

export const initialFormPayload = {
  milesFrom: '',
  zipcode: 0
};

export const initialState = {
  formPayload: { ...initialFormPayload },
  validationRules: { ...initialValidationRules }
};
