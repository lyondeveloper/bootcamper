export const initialFormPayload = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: ""
};

export const initialValidationRules = {
  name: true,
  email: true,
  password: true,
  confirmPassword: true,
  role: true
};

export const layout = {
  selectOption: {
    values: [
      {
        id: 0,
        value: ""
      },
      {
        id: 1,
        value: "Regular User (Browse, Write reviews, etc)"
      },
      {
        id: 2,
        value: "Bootcamp Publisher"
      }
    ]
  }
};

export const initialState = {
  formPayload: { ...initialFormPayload },
  validationRules: { ...initialValidationRules }
};
