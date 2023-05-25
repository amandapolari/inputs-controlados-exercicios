import { createGlobalStyle } from 'styled-components';
import PaginaDoCartao from './Pagina/PaginaDoCartao';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica;
  }
  body {
    background-color:lightgray ;
  }
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <PaginaDoCartao />
        </>
    );
}

export default App;
