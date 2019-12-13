export const layout = {
  careers: [
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
  ],
  budget: [
    {
      id: 0,
      value: 'Any'
    },

    {
      id: 1,
      value: '20,000'
    },

    {
      id: 2,
      value: '15,000'
    },

    {
      id: 3,
      value: '10,000'
    },

    {
      id: 4,
      value: '8,000'
    },

    {
      id: 5,
      value: '6,000'
    },

    {
      id: 6,
      value: '4,000'
    },

    {
      id: 7,
      value: '2,000'
    }
  ],
  rating: [
    {
      id: 0,
      value: 'Any'
    },

    {
      id: 1,
      value: '9+'
    },

    {
      id: 2,
      value: '8+'
    },

    {
      id: 3,
      value: '7+'
    },

    {
      id: 4,
      value: '6+'
    },

    {
      id: 5,
      value: '5+'
    },

    {
      id: 6,
      value: '4+'
    },

    {
      id: 7,
      value: '3+'
    },

    {
      id: 8,
      value: '2+'
    }
  ]
};

export const step1Payload = {
  name: '',
  phone: '',
  email: '',
  address: '',
  website: ''
};

export const step2Payload = {
  description: '',
  careers: [],
  housing: false,
  jobAssistance: false,
  jobGuarantee: false,
  acceptGi: false
};

export const step1Rules = {
  name: true,
  website: true,
  phone: true,
  address: true,
  email: true
};

export const step2Rules = {
  description: true,
  careers: true
};

export const initialAddBootcamp = {
  currentStep: 1,
  formPayload: {
    step1: { ...step1Payload },
    step2: { ...step2Payload }
  },
  validationRules: {
    step1Rules: { ...step1Rules },
    step2Rules: { ...step2Rules }
  }
};

export const initialFilterBootcamp = {
  sidebar: {
    formPayload: {
      milesFrom: '',
      zipcode: ''
    }
  },

  filter: {
    formPayload: {
      rating: '',
      budget: '',
      career: ''
    }
  }
};

export const initialState = {
  filterBootcamp: { ...initialFilterBootcamp },
  addBootcamp: { ...initialAddBootcamp },
  bootcamps: [],
  singleBootcamp: {},
  loading: false,
  error: null
};
