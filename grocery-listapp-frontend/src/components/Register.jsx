import React, {useState} from "react";
import axios from "axios";

export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post("http://localhost:8085/user/signup", {
          email,
          password,
          username,
        });

        console.log("Registration successful", response.data);
        setSuccessMessage("Registration successful! You can now login.");
        setEmail("");
        setPassword("");
        setUsername("");

      } catch (error) {
        console.error("Registration failed", error);
        setErrorMessage("Registration failed. Please try again.");
        setEmail("");
        setPassword("");
        setUsername("");
      }
    };
  
    return (
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="username">User Name</label>
          <input
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            placeholder="User Name"
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button type="submit">Register</button>
        </form>
        {successMessage && (
          <p className="success-message">{successMessage}</p>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
          Already have an account? Login here.
        </button>
      </div>
    );
  };
  




































// export const Register = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:8085/user/signup", {
//         email, password, username,
//       });
//       console.log("Registration successful", response.data);
//       setSuccessMessage("Registration successful! You can now login.");


//     } catch (error) {
//       console.error("Registration failed", error);
//       setErrorMessage("Registration failed. Please try again.");
//     }
//   };

//   return (
//     <div className="auth-form-container">
//       <h2>Register</h2>
//       <form className="register-form" onSubmit={handleSubmit}>
//         <label htmlFor="username">Username</label>
//         <input
//           value={username}
//           name="username"
//           onChange={(e) => setUsername(e.target.value)}
//           id="username"
//           placeholder="Username"
//         />
//         <label htmlFor="email">Email</label>
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="youremail@gmail.com"
//           id="email"
//           name="email"
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           type="password"
//           placeholder="********"
//           id="password"
//           name="password"
//         />
//         <button type="submit">Register</button>
//       </form>
//       {successMessage && <p className="success-message">{successMessage}</p>}
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//       <button
//         className="link-btn"
//         onClick={() => props.onFormSwitch("login")}
//       >
//         Already have an account? Login here.
//       </button>
//     </div>
//   );
// };






















// import React, {useState} from "react";
// import axios from "axios";

// export const Register = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:8085/user/signup", {
//         email: email,
//         password: password,
//         name: name,
//       });

//       console.log("Registration successful", response.data);
//       setSuccessMessage("Registration successful! You can now login.");

//     } catch (error) {
//       console.error("Registration failed", error);
//       setErrorMessage("Registration failed. Please try again.");
//     }
//   };

//   return (
//     <div className="auth-form-container">
//       <h2>Register</h2>
//       <form className="register-form" onSubmit={handleSubmit}>
//         <label htmlFor="name">Full Name</label>
//         <input
//           value={name}
//           name="name"
//           onChange={(e) => setName(e.target.value)}
//           id="name"
//           placeholder="Full Name"
//         />
//         <label htmlFor="email">Email</label>
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="youremail@gmail.com"
//           id="email"
//           name="email"
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           value={password}
//           onChange={(e) => setPass(e.target.value)}
//           type="password"
//           placeholder="********"
//           id="password"
//           name="password"
//         />
//         <button type="submit">Register</button>
//       </form>
//       {successMessage && <p className="success-message">{successMessage}</p>}
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//       <button
//         className="link-btn"
//         onClick={() => props.onFormSwitch("login")}
//       >
//         Already have an account? Login here.
//       </button>
//     </div>
//   );
// };











































// import React, { useState } from "react";

// export const Register = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Register</h2>
//         <form className="register-form" onSubmit={handleSubmit}>
//             <label htmlFor="name">Full Name</label>
//             <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
//             <label htmlFor="email">Email</label>
//             <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//             <label htmlFor="password">Password</label>
//             <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//             <button type="submit">Register</button>
//         </form>
//         <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
//     </div>
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
