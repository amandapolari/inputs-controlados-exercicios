//declare todo o componente formulário e seus inputs. Exporte o formulário.
import React, {useState} from 'react';
import { Button, Form, Input, Label, Select } from './estiloDoFormulario';

const Formulario = () => {
    // 0. Importar useState;
    // 1. Criar as variáveis de estado e de setar estados com useState;
    // 2. Aplicar a propriedade value em cada um dos inputs que desejo controlar;
    // 3. Criar funções para acompanhar as mudanças no input e setar essas mudanças em cada value;
    // 3.1 A função vai receber um event, e vai capturar o que está sendo digitado com o caminho: event.target.value, e esse será o valor setado na variável
    // 4. Criar nos inputs a propriedade onChange e passar para ela a função que muda e seta os valores

    const [nameInput, setNameInput] = useState('');
    const [cardNumberInput, setCardNumberInput] = useState('');
    const [validityInput, setValidityInput] = useState('');
    const [cvcInput, setCvcInput] = useState('');

    const changeNameValue = (event) => {
        setNameInput(event.target.value);
    }

    const changeCardNumberValue = (event) => {
        setCardNumberInput(event.target.value);
    }

    const changeValidityValue = (event) => {
        setValidityInput(event.target.value);
    }

    const changeCvcValue = (event) => {
        setCvcInput(event.target.value);
    }

    return (
        <div>
            <Form>
                <Select>
                    <option>Crédito</option>
                    <option>Débito</option>
                </Select>

                <Label htmlFor="nameInput">Nome:</Label>
                <Input type="text" id="nameInput" value={nameInput} onChange={changeNameValue}/>

                <Label htmlFor="cardNumberInput">Número do cartão:</Label>
                <Input type="number" id="cardNumberInput" value={cardNumberInput} onChange={changeCardNumberValue}/>

                <Label htmlFor="validityInput">Validade:</Label>
                <Input type="number" id="validityInput" value={validityInput} onChange={changeValidityValue}/>
                
                <Label htmlFor="cvcInput">CVC:</Label>
                <Input type="number" id="cvcInput" value={cvcInput} onChange={changeCvcValue}/>

                <Button>Cadastrar Cartão</Button>
            </Form>
        </div>
    );
};

export default Formulario;
