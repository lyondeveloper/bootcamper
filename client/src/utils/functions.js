import axios from 'axios';

export const dynamicFormValidation = (payload, rules) => {
  const keys = Object.keys(payload);
  let next;

  // Checking the input dynamically to valid or invalid with the
  // validation rules, then returning true or false depending
  // on the result
  keys.forEach(key => {
    if (payload[key] === '' || payload[key] === 0) {
      rules[key] = false;
      next = false;
    } else {
      rules[key] = true;
      next = true;
    }
  });

  return {
    next,
    rules
  };
};

// Seth auth token in headers to make API calls that
// requires authentication
export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common['Authorization'] = '';
  }
};

export const deleteDataOnLogout = arr =>
  arr.forEach(element => localStorage.removeItem(element));

export const getMultipleItemsFromStorage = arr => {
  const elementsFromStorage = [];
  let current = {};
  arr.forEach(element => {
    current = localStorage.getItem(element);
    elementsFromStorage.push(JSON.parse(current));
  });

  return elementsFromStorage;
};

// Getting the token from the local storage;
export const getItemFromLocalStorage = item => {
  const itemFromStorage = localStorage.getItem(item);
  const itemParsed = JSON.parse(itemFromStorage);
  if (itemParsed) return itemParsed;
};

export const setItemToLocalStorage = item => {};

export const deleteItemToLocalStorage = item => {
  const itemToRemove = getItemFromLocalStorage(item);

  if (itemToRemove) localStorage.removeItem(item);
};
