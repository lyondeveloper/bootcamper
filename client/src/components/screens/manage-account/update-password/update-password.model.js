export const formPayload = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: ""
};

export const validationRules = {
  currentPassword: true,
  newPassword: true,
  confirmNewPassword: true
};

export const initialState = {
  formPayload: { ...formPayload },
  validationRules: { ...validationRules }
};
