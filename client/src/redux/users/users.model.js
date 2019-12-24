// Login State
export const loginFormPayload = {
  email: "",
  password: ""
};

export const loginRules = {
  email: true,
  password: true
};

export const initialLoginState = {
  formPayload: { ...loginFormPayload },
  validationRules: { ...loginRules }
};

// Manage Account state
export const initialUpdatePassword = {
  formPayload: {
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  },
  validationRules: {
    currentPassword: true,
    newPassword: true,
    confirmNewPassword: true
  }
};

export const initialUpdateDetails = {
  formPayload: {
    email: "",
    name: ""
  },
  validationRules: {
    email: true,
    name: true
  }
};

export const initialManageAccountState = {
  updatePassword: { ...initialUpdatePassword },
  updateDetails: { ...initialUpdateDetails }
};

// Register state
export const registerFormPayload = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: ""
};

export const registerValidationRules = {
  name: true,
  email: true,
  password: true,
  confirmPassword: true,
  role: true
};
export const initialRegisterState = {
  formPayload: { ...registerFormPayload },
  validationRules: { ...registerValidationRules }
};

// Reset password state
export const resetPasswordFormPayload = {
  email: ""
};
export const resetPasswordValidationRules = {
  email: true
};
export const initialResetPasswordState = {
  formPayload: { ...resetPasswordFormPayload },
  validationRules: { ...resetPasswordValidationRules },
  emailSent: false
};

// User Reducer initial state
export const userInitialState = {
  register: { ...initialRegisterState },
  login: { ...initialLoginState },
  manageAccount: { ...initialManageAccountState },
  resetPassword: { ...initialResetPasswordState },
  currentUser: {},
  isAuthenticated: false,
  loading: false,
  error: null
};
