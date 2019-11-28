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
        text: "Regular User (Browse, Write reviews, etc)",
        value: "user"
      },
      {
        id: 2,
        text: "Bootcamp Publisher",
        value: "publisher"
      }
    ]
  }
};

export const initialState = {
  formPayload: { ...initialFormPayload },
  validationRules: { ...initialValidationRules }
};
