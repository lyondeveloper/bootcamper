export const formPayload = {
  rating: "0",
  title: "",
  text: ""
};

export const validationRules = {
  title: true,
  text: true
};

export const initialState = {
  formPayload: { ...formPayload },
  validationRules: { ...validationRules }
};
