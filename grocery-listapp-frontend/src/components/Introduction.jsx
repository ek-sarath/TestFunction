import React from 'react';
import Logo from '../assets/GroceryList.svg';
import Register from './Register.jsx';
import Login from './Login.jsx';

const Introduction = ({ onStart, onRegister, onLogin }) => {
  const handleLogin = () => {
    // Set started to true when the user logs in
    onLogin();
  };

  return (
    <div className="Introduction">
      <div className="Head">
        <img src={Logo} alt="Logo" className="Logo" />
        <h1>Grocery List App</h1>
      </div>
      <p>Create a shopping list to add and manage groceries to buy at the store.</p>

      <div className='LogReg'>
        <Register onRegister={onRegister} />
        
        <Login onLogin={handleLogin} />
      </div>

      {/* The Start button is now replaced with the Login button */}
      <button onClick={onStart} className="StartButton">
        Start
      </button>
    </div>
  );
};

export default Introduction;
