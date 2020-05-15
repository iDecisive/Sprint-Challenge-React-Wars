import React, { useState, useEffect } from 'react';
//import './App.css';
import Character from './components/Character';
import axios from 'axios';
import styled from 'styled-components';

//Styles

let AppDiv = styled.div`

  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

let Title = styled.h1`

  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;

`;

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

    axios.get('https://swapi.py4e.com/api/people/1/').then(res => {setChar1(res.data)}).catch()
    axios.get('https://swapi.py4e.com/api/people/2/').then(res => {setChar2(res.data)}).catch()
    axios.get('https://swapi.py4e.com/api/people/3/').then(res => {setChar3(res.data)}).catch()
    axios.get('https://swapi.py4e.com/api/people/4/').then(res => {setChar4(res.data)}).catch()
    axios.get('https://swapi.py4e.com/api/people/5/').then(res => {setChar5(res.data)}).catch()

  },[]);

  if (!char5) {

    return <h2>Waiting for characters...</h2>

  }

  console.log(char5);


  return (
    <AppDiv className='App'>
      <Title className='Header'>Characters</Title>

      <Character char={char1}/> {/* Would be cool to tyle their text shadow as red or blue depending on what side they're on */}
      <Character char={char2}/>
      <Character char={char3}/>
      <Character char={char4}/>
      <Character char={char5}/>

    </AppDiv>
  );
}

export default App;
