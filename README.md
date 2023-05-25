# Inputs Controlados - Formulário LabeCard 

O **Formulário LabeCard** será uma  plataforma dedicada a facilitar o processo de registro do do cartão de crédito ou débito de estudantes para realizar compras de cursos na renomada instituição de ensino, Labenu. Com uma interface intuitiva e segura, a plataforma deve oferecer uma experiência tranquila e conveniente. Por enquanto temos apenas o design deste projeto e precisamos de você para implementar o formulário.
![image](https://github.com/labenuexercicios/inputs-controlados-exercicios/assets/71137294/7a66a039-1989-4e56-abb5-76a933ef6614)



**Veja como deve funcionar o registro do cartão:**

O cartão poderá ser registrado no Formulário LabeCard. Basta fornecer os detalhes do cartão, como **forma de pagamento**, **número**, **nome do titular**, **data de validade** e código de segurança (**CVC**). 

No template existe um componente Cartão com estilização semelhante a imagem abaixo:
![image](https://github.com/labenuexercicios/inputs-controlados-exercicios/assets/71137294/50b7828d-3f6e-43b6-93d1-bd1fab53973a)
### Você deverá implementar o componente formulário e fazer com que as alterações nos input's provoque alterações na imagem do cartão.

<br/>
<br/>

# Exercício 1
- Implemente o componente Formulário e chame-o na página do cartão.
- No formulário, crie um input para cada informação do cartão: forma de pagamento, nome da pessoa, número do cartão, data de validade e CVC.



# Exercício 2
- Faça o input controlado de cada informação do cartão. A declaração de estado e funções de controle do input deverá estar na página do cartão.
- ⚠️ Use Props para passar estados e funções da página do cartão para o Cartão ou para o Formulário.
- As informações digitadas nos inputs do componente Formulário.js deverão refletir alterações na imagem do cartão que está implementada no componente Cartão.js.



# Exercício 3
- Crie um botão no formulário.
- Implemente uma função na página do cartão que será executada após o clique do botão. A função deve limpar os inputs e exibir um alerta com a mensagem "Seu cartão foi cadastrado com sucesso!".
- ⚠️ Remova o comportamento padrão do formulário e evite a atualização automática da página.
