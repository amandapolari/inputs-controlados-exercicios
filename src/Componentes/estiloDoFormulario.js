//Declare o estilo do fomulário aqui
import styled from 'styled-components';

export const Form = styled.form`
    display: grid;
    /* grid-template: repeat(6, 1fr) / 1fr; */
    width: 500px;
    padding: 4vh;
    /* border: solid 2px black; */
`;

export const Select = styled.select`
    width: 20%;
    padding: 1vh;
    border-radius: 10px;
    background-color: transparent;
    border: none;
    margin: 3vh;
    outline: none;
`;

export const Label = styled.label`
    display: block;
    padding-top: 2vh;
`;

export const Input = styled.input`
    padding: 0.5vh;
    background-color: transparent;
    outline: none;
    width: 100%;
    border-width: 0 0 0.1vh;
    border-bottom-style: solid;
    border-bottom-color: rgba(17, 17, 17, 0.2);
`;

export const Button = styled.button`
    padding: 2vh;
    margin: 2vh;
    background-color: #ffa500;
    border: none;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    width: 50%;
    color: white;
`;
