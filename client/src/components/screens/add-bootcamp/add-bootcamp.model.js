export const careersLayout = [
  {
    id: 0,
    value: 'Any'
  },

  {
    id: 1,
    value: 'Web Development'
  },

  {
    id: 2,
    value: 'Mobile Development'
  },

  {
    id: 3,
    value: 'UI/UX'
  },

  {
    id: 4,
    value: 'Data science'
  },

  {
    id: 5,
    value: 'Business'
  },

  {
    id: 6,
    value: 'Other'
  }
];

export const formPayload = {
  name: '',
  description: '',
  website: '',
  phone: '',
  email: '',
  address: '',
  careers: [],
  housing: false,
  jobAssistance: false,
  jobGuarantee: false,
  acceptGi: false
};

export const validationRules = {
  name: true,
  description: true,
  website: true,
  phone: true,
  address: true,
  email: true,
  careers: true,
  housing: true,
  jobAssistance: true,
  jobGuarantee: true,
  acceptGi: true
};

export const initialState = {
  formPayload: { ...formPayload },
  validationRules: { ...validationRules }
};
