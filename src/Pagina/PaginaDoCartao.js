import React, { useState } from 'react';
import Cartao from '../Componentes/Cartao';
import Formulario from '../Componentes/Formulario';
import { LayoutDaPagina } from './estiloDaPaginaDoCartao';

function PaginaDoCartao() {
    // Meus Rascunhos:
    // 0. Importar useState;
    // 1. Criar as variáveis de estado e de setar estados com useState;
    // 2. Aplicar a propriedade value em cada um dos inputs que desejo controlar;
    // 3. Criar funções para acompanhar as mudanças no input e setar essas mudanças em cada value;
    // 3.1 A função vai receber um event, e vai capturar o que está sendo digitado com o caminho: event.target.value, e esse será o valor setado na variável
    // 4. Criar nos inputs a propriedade onChange e passar para ela a função que muda e seta os valores

    // declaração de estados do card

    const [nameCard, setnameCard] = useState('Amanda Polari');
    const [cardNumber, setCardNumber] = useState('3652 6589 7458 1254');
    const [cardValidity, setCardValidity] = useState('131');
    const [cvcCard, setCvcCard] = useState('03/29');
    const [paymentMethodCard, setPaymentMethodCard] = useState('Crédito');

    // declare os estados aqui
    const [nameInput, setNameInput] = useState('');
    const [cardNumberInput, setCardNumberInput] = useState('');
    const [validityInput, setValidityInput] = useState('');
    const [cvcInput, setCvcInput] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    // declare as funções de controle de inputs aqui
    const changeNameValue = (event) => {
        setNameInput(event.target.value);
        setnameCard(event.target.value);
    };

    const changeCardNumberValue = (event) => {
        setCardNumberInput(event.target.value);
        setCardNumber(event.target.value);
    };

    const changeValidityValue = (event) => {
        setValidityInput(event.target.value);
        setCardValidity(event.target.value);
    };

    const changeCvcValue = (event) => {
        setCvcInput(event.target.value);
        setCvcCard(event.target.value);
    };

    const changePaymentMethod = (event) => {
        setPaymentMethod(event.target.value);
        setPaymentMethodCard(event.target.value);
    };

    const clearFields = (event) => {
        event.preventDefault();
        // form
        setNameInput('');
        setCardNumberInput('');
        setValidityInput('');
        setCvcInput('');
        setPaymentMethod('');
        // card
        setnameCard('Amanda Polari');
        setCardNumber('3652 6589 7458 1254');
        setCardValidity('131');
        setCvcCard('03/29');
        setPaymentMethodCard('Crédito');
        // msg
        alert('Seu cartão foi cadastrado com sucesso!');
    };

    return (
        <LayoutDaPagina>
            {/* Passe as variáveis de estado para o Cartão. Use Props. */}
            <Cartao
                nameCard={nameCard}
                cardNumber={cardNumber}
                cardValidity={cardValidity}
                cvcCard={cvcCard}
                paymentMethodCard={paymentMethodCard}
            />

            {/* Chame o Componente Formulário Aqui */}
            {/* Passe a função de controle de input e variável de estado para o formulário. Para isso use Props */}
            <Formulario
                nameInput={nameInput}
                cardNumberInput={cardNumberInput}
                validityInput={validityInput}
                cvcInput={cvcInput}
                changeNameValue={changeNameValue}
                changeCardNumberValue={changeCardNumberValue}
                changeValidityValue={changeValidityValue}
                changeCvcValue={changeCvcValue}
                paymentMethod={paymentMethod}
                changePaymentMethod={changePaymentMethod}
                clearFields={clearFields}
            />
        </LayoutDaPagina>
    );
}

export default PaginaDoCartao;
