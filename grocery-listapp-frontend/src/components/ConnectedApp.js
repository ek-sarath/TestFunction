// ConnectedApp.js
import React from 'react';
import {connect} from 'react-redux';
import {toggleForm, loginSuccess} from '../Actions';
import {Login} from './Login';
import {Register} from './Register';
import GroceryListApp from './GroceryListApp';

const ConnectedApp = (props) => {
  const { currentForm, isLoggedIn, toggleForm, loginSuccess } = props;

  const handleLoginSuccess = () => {
    loginSuccess();
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <GroceryListApp />
      ) : (
        currentForm === 'login' ? (
          <Login onFormSwitch={toggleForm} onLoginSuccess={handleLoginSuccess} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentForm: state.currentForm,
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleForm: (formName) => dispatch(toggleForm(formName)),
    loginSuccess: () => dispatch(loginSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);
