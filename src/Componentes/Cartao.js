import {
    CVC,
    DesignDoCartao,
    FormaDePagamento,
    LogoLabenu,
    LogoMasterCard,
    Nome,
    NumeroDoCartao,
    Validade,
} from './estiloDoCartao';

function Cartao(props) {
    const { nameCard, cardNumber, cardValidity, cvcCard, paymentMethodCard } =
        props;

    return (
        <DesignDoCartao>
            <LogoLabenu
                alt="logo da labenu"
                src="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/6418d88006d6c5b61efb9e69_Fogo-Cima.svg"
            />

            <NumeroDoCartao>{cardNumber}</NumeroDoCartao>

            <Nome>{nameCard}</Nome>

            <CVC>cvc:{cvcCard}</CVC>

            <FormaDePagamento> $ {paymentMethodCard}</FormaDePagamento>

            <Validade>validade: {cardValidity}</Validade>

            <LogoMasterCard
                id="logo-master"
                alt="logo da master card"
                src="https://logospng.org/download/mastercard/logo-mastercard-2048.png"
            />
        </DesignDoCartao>
    );
}

export default Cartao;
