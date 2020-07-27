import React, { useState }from 'react';
import './App.css';

import DeeplyNested from './components/DeeplyNested';
import IsLoggedIn from './context/isLoggedInContext';

const App = () => {
  const [ isLoggedIn, changeIsLogIn ] = useState(false);

  const toggleLoginHandler = () => {
    changeIsLogIn(!isLoggedIn);
  };

  return (
    <div className="App">
      <div>
        <button onClick={toggleLoginHandler}>Toggle login state</button>
      </div>

      <IsLoggedIn.Provider value={{
        isLoggedIn,
        toggleLogInValue: toggleLoginHandler
      }} >
        {isLoggedIn ? 'User authenticated' : 'Please log in'}
        <DeeplyNested />
      </IsLoggedIn.Provider>
    </div>
  );
}

export default App;
