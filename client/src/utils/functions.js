import axios from "axios";

// Validating form dynamically
export const dynamicFormValidation = (payload, rules) => {
  const keys = Object.keys(payload);
  let next;

  // Checking the input dynamically to valid or invalid with the
  // validation rules, then returning true or false depending
  // on the result
  keys.forEach(key => {
    if (payload[key] === "" || payload[key] === 0) {
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
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common["Authorization"] = "";
  }
};

// Method to destroy the data from local storage
// on logout
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

// Getting dynamic item from the local storage;
export const getItemFromLocalStorage = item => {
  const itemFromStorage = localStorage.getItem(item);
  const itemParsed = JSON.parse(itemFromStorage);
  if (itemParsed) return itemParsed;
};

// Setting multiple items to local storage
// For this you have to pass an object
// with the key and the value (as JSON)
// Example: { jwtToken: 'token' }
export const setMultipleItemsToStorage = data => {
  const keys = Object.keys(data);
  const values = Object.values(data);

  keys.forEach((key, index) => localStorage.setItem(key, values[index]));
};

// Delete item from local storage
// Pass the key as parameter
export const deleteItemToLocalStorage = item => {
  const itemToRemove = getItemFromLocalStorage(item);

  if (itemToRemove) localStorage.removeItem(item);
};
