export const layout = {
  selectOption: {
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
    ],
    career: [
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
    ]
  }
};

export const initialFormPayload = {
  rating: '',
  budget: '',
  career: ''
};

export const initialState = {
  formPayload: { ...initialFormPayload }
};
