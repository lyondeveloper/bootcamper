export const formPayload = {
  email: '',
  name: ''
}

export const validationRules = {
  email: true,
  name: true
}

export const initialState = {
  formPayload: {
    ...formPayload
  },

  validationRules: {
    ...validationRules
  }
};
