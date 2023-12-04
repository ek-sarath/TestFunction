// actions.js
export const toggleForm = (formName) => ({
    type: 'TOGGLE_FORM',
    payload: formName,
  });
  
  export const loginSuccess = () => ({
    type: 'LOGIN_SUCCESS',
  });
  