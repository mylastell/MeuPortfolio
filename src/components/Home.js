import React from "react";
import Eu from "../img/Euzinha.jpg";

import styled from "styled-components";

const Imagem = styled.img`
 width: 200px;
  height: 300px;
  margin-left: 500px;
`;

export default class Home extends React.Component {
  render() {
    return (

      <>
       <h1>Os trabalhos da Mylena</h1>
        <h2>É sou eu rs'</h2>


       <h5>🌺Mylena Stella🌺</h5>
        <Imagem src={Eu} alt="Eu - Mylena Stella" />
        
      <div class= "links">
      <button><a href="https://github.com/mylastell">🐱Github🐱</a></button>
        
        <button><a href="https://www.instagram.com/mylastell/">📸Instagram📸</a></button>
        
        <button><a href="http://lattes.cnpq.br/1536362824130033/">🔗Lattes🔗</a></button>
        </div>


        <h3>Inicio de um sonho</h3>

        <button class="dream"><a href="https://codepen.io/costa-mfreitas/pen/oNpzgRr">💭💭💭</a></button>
        
      </>
    );
  }
}
