//declare todo o componente formulário e seus inputs. Exporte o formulário.
import React from 'react';
import { Button, Form, Input, Label, Select } from './estiloDoFormulario';

const Formulario = (props) => {

    const {
        nameInput,
        changeNameValue,
        cardNumberInput,
        changeCardNumberValue,
        validityInput,
        changeValidityValue,
        cvcInput,
        changeCvcValue,
        paymentMethod,
        changePaymentMethod,
    } = props;

    return (
        <div>
            <Form>
                <Select value={paymentMethod} onChange={changePaymentMethod}>
                    <option disabled value={''}>
                        Selecione
                    </option>
                    <option>Crédito</option>
                    <option>Débito</option>
                </Select>

                <Label htmlFor="nameInput">Nome:</Label>
                <Input
                    type="text"
                    id="nameInput"
                    value={nameInput}
                    onChange={changeNameValue}
                />

                <Label htmlFor="cardNumberInput">Número do cartão:</Label>
                <Input
                    type="number"
                    id="cardNumberInput"
                    value={cardNumberInput}
                    onChange={changeCardNumberValue}
                />

                <Label htmlFor="validityInput">Validade:</Label>
                <Input
                    type="text"
                    id="validityInput"
                    value={validityInput}
                    onChange={changeValidityValue}
                />

                <Label htmlFor="cvcInput">CVC:</Label>
                <Input
                    type="number"
                    id="cvcInput"
                    value={cvcInput}
                    onChange={changeCvcValue}
                />

                <Button>Cadastrar Cartão</Button>
            </Form>
        </div>
    );
};

export default Formulario;
