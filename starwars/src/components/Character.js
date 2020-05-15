// Write your Character component here
import React from 'react';
import styled from 'styled-components';

let CharDiv = styled.div`

    font-weight: bold;
    text-shadow: 1px 1px 2px #ff0000;
    border-bottom: 1px solid white;
    background-color: rgba(45, 52, 54, 0.4);
    width: 200px; 

`;

let Character = props => {

    return (

        <CharDiv>

            <p>{props.char.name}</p>
            <p>Year born: {props.char.birth_year}</p>

        </CharDiv>

    );

}

export default Character;