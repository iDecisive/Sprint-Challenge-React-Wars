import React, { useState, useEffect } from 'react';
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

  useEffect(_ => {

    axios.get("https://swapi.py4e.com/api/people/1/").then(res => {setChar1(res.data)}).catch()
    axios.get("https://swapi.py4e.com/api/people/2/").then(res => {setChar2(res.data)}).catch()
    axios.get("https://swapi.py4e.com/api/people/3/").then(res => {setChar3(res.data)}).catch()
    axios.get("https://swapi.py4e.com/api/people/4/").then(res => {setChar4(res.data)}).catch()
    axios.get("https://swapi.py4e.com/api/people/5/").then(res => {setChar5(res.data)}).catch()

  },[]);

  if (!char5) {

    return <h2>Waiting for characters...</h2>

  }

  console.log(char5);


  return (
    <div className='App'>
      <h1 className='Header'>Characters</h1>
    </div>
  );
}

export default App;
