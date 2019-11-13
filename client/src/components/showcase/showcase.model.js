export const initialValidationRules = {
  milesFrom: true,
  zipcode: true
};

export const initialFormPayload = {
  milesFrom: '',
  zipcode: ''
};

export const initialState = {
  formPayload: { ...initialFormPayload },
  validationRules: { ...initialValidationRules }
};
