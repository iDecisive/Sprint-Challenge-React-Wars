// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

let CharDiv = styled.div`

    font-weight: bold;
    text-shadow: 1px 1px 2px #ff0000;
    border-bottom: 1px solid white;
    background-color: rgba(45, 52, 54, 0.4);
    width: 200px; 

`;

let Species = props => { //make it where this occurs on click

    let [speciesData, setSpeciesData] = useState(null);

    let speciesType = props.species[0];

    useEffect(_ => {

        console.log(speciesType)

        axios.get(speciesType).then(res => {setSpeciesData(res.data)}).catch()

    },[]);


    if (!speciesData) {

        return <h3>Waiting for species data...</h3>;

    }

    return (

        <p className = 'species' id={props.charid} style={{display: 'none'}}>{speciesData.name}</p>

    )

}


let Character = props => {


    return (

        <CharDiv>

            <p>{props.char.name}</p>
            <p>Year born: {props.char.birth_year}</p>

            <Species species={props.char.species} charid={props.charid}/>
            <button style={{ marginBottom: '20px', backgroundColor: 'rgba(45, 52, 54, 0.4)', color: 'white' }} onClick={_ => {document.getElementById(props.charid).style.display = 'block'}}>
                Show species
            </button>

        </CharDiv>

    );

}

export default Character;