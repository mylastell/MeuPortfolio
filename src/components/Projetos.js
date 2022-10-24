import React from "react";
import Panter from "../img/panter.jpg";
import Amigao from "../img/amigao.jpg";
import Cronos from "../img/cronos.jpg";
import Finn from "../img/finn.jpg";
import List from "../img/list.jpg";
import styled from "styled-components";

const Imagem = styled.img`
  width: 500px;
  height: 500px;
  padding: 10px;
`;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Deu tudo Certo!</h3>
        
       <h3>Meus principais Trabalhos 🖥️</h3>

       <h3>Calculadora Cor de Rosa</h3>
        <Imagem src={Panter} alt="Calculadora da Pantera cor de rosa" />
        <a href="https://codesandbox.io/s/github/mylastell/PinkPanterCalculadora">Calculadora Cor de Rosa</a>

        <h3>Lista de Tarefas</h3>
        <Imagem src={List} alt="Lista de Tarefas" />
        <a href="https://codesandbox.io/s/github/mylastell/Minha_Lista">Lista de Tarefas</a>

        <h3>Cronometro</h3>
        <Imagem src={Cronos} alt="Cronometro" />
        <a href="https://codesandbox.io/s/github/mylastell/CronometroPersonalizado">Cronometro</a>

        <h3>Site de Adoção</h3>
        <Imagem src={Amigao} alt="Site de Adoção" />
        <a href="meuamigaozao.netlify.app/">Site de Adoção</a>



      </div>
    );
  }
}
