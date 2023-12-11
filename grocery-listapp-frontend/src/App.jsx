import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { store } from '../src/redux/store';
import { Login } from './components/Login';
import { Register } from './components/Register';
import GroceryListApp from './components/GroceryListApp';

const queryClient = new QueryClient();

function App() {
    const [currentForm, setCurrentForm] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  }


  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
        {isLoggedIn ? (
        <GroceryListApp />
      ) : (
        currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} onLoginSuccess={handleLoginSuccess} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )
      )}
        </div>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;














// import React, { useState } from "react";
// import '../src/App.css';
// import {Login} from "./components/Login";
// import {Register} from "./components/Register";
// import GroceryListApp from "./components/GroceryListApp";

// function App() {
//   const [currentForm, setCurrentForm] = useState('login');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//   }

//   return (
//     <div className="App">
//       {isLoggedIn ? (
//         <GroceryListApp />
//       ) : (
//         currentForm === "login" ? (
//           <Login onFormSwitch={toggleForm} onLoginSuccess={handleLoginSuccess} />
//         ) : (
//           <Register onFormSwitch={toggleForm} />
//         )
//       )}
//     </div>
//   );
// }

// export default App;