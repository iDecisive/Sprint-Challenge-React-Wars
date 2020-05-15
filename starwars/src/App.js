import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  let [char1, setChar1] = useState(null); //I get 'object is not itterable' when using a for loop to add to an existing state array???
  let [char2, setChar2] = useState(null);
  let [char3, setChar3] = useState(null);
  let [char4, setChar4] = useState(null);
  let [char5, setChar5] = useState(null);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  axios.get().then().catch()

  return (
    <div className='App'>
      <h1 className='Header'>Characters</h1>
    </div>
  );
}

export default App;
