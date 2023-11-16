import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    
    // Assume login is successful for demonstration purposes
    // You should perform actual authentication here
    const loginSuccessful = true;

    if (loginSuccessful) {
      // Call the callback function to redirect
      props.onLoginSuccess();
    }
  }

  return (
    <div className="auth-form-container">
      <h1>Grocery List App</h1>
              <h2>Login</h2>
             <form className="login-form" onSubmit={handleSubmit}>
                  <label htmlFor="email">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                  <label htmlFor="password">Password</label>
                   <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                   <button type="submit">Log In</button>
               </form>
               <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            </div>
  );
}

































// import React, { useState } from "react";

// export const Login = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <div className="auth-form-container">
//         <h1>Grocery List App</h1>
//             <h2>Login</h2>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <label htmlFor="email">Email</label>
//                 <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//                 <label htmlFor="password">Password</label>
//                 <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//                 <button type="submit">Log In</button>
//             </form>
//             <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
//         </div>
//     )
// }


































// import React, { useState } from 'react';
// import '../App.css';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Call your backend API to log in the user
//     // You can use fetch or axios for this purpose
//     // Example: fetch('/api/login', { method: 'POST', body: JSON.stringify({ username, password }) })
//     onLogin(username, password);
//   };

//   return (
//     <div className="Login">
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;
