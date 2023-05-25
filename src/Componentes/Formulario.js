//declare todo o componente formulário e seus inputs. Exporte o formulário.
import React from 'react';
import { Button, Form, Input, Label, Select } from './estiloDoFormulario';

const Formulario = () => {
    return (
        <div>
            <Form>
                <Select>
                    <option>Crédito</option>
                    <option>Débito</option>
                </Select>
                <Label htmlFor="nomeInput">Nome:</Label>
                <Input type="text" id="nomeInput" />
                <Label htmlFor="numeroCartaoInput">Número do cartão:</Label>
                <Input type="text" id="numeroCartaoInput" />
                <Label htmlFor="validadeInput">Validade:</Label>
                <Input type="text" id="validadeInput" />
                <Label htmlFor="cvc">CVC:</Label>
                <Input type="text" id="cvc" />
                <Button>Cadastrar Cartão</Button>
            </Form>
        </div>
    );
};

export default Formulario;
