// store.js
import { createStore } from 'redux';

const initialState = {
  currentForm: 'login',
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FORM':
      return { ...state, currentForm: action.payload };
    case 'LOGIN_SUCCESS':
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
