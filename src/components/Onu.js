import React from "react";
import Entrada from "../img/entrada.jpg";
import Pias from "../img/pias.jpg";
import Cano from "../img/cano.jpg";
import Praça from "../img/praça.jpg";
import Bueiro from "../img/bueiro.jpg";
import Predio from "../img/predio.jpg";
import styled from "styled-components";
import Modal from 'react-modal'

 const Img = styled.img`

 width: 20vw;
 `

const Imagem = styled.img`
  width: 500px;
  height: 500px;
  padding: 10px;
`;

export default class App extends React.Component {

  state={
    stateModal: false
  }

  openModal = ()=>{
    this.setState({stateModal: true})
  }

  closeModal = ()=>{
    this.setState({stateModal: false})
  }

  render() {
    return (
     
     <>
<button onClick={this.openModal}>Pautas da Onu🌐</button>

<Modal

 style={{

  content: {
   backgroundColor: 'white'
   
  }
}}


isOpen={this.state.stateModal} >

  <button onClick={this.closeModal}>❌</button>
  <section>
<div class="caixa1">
<h4>Pias Comunitárias</h4>

</div>
<div class="caixa2">
<h4>Saneamento Básico</h4>

</div>
<div class="caixa3">
<h4>Praça e Academia do Idoso</h4>

</div>
<div class="caixa4">
<h4>Limpeza</h4>

</div>
<div class="caixa5">
<h4>Conservação</h4>

</div>
</section>
 
</Modal>

       <h3>Objetivos de Desenvolvimento Sustentavel: Morro Azul - RJ♻️</h3>
        <Imagem src={Entrada} alt="faixada da comunidade" />
        <p>Situada na Zona Sul do Rio de Janeiro, a comunidade Nossa Senhora de Lourdes, popularmente conhecida como Morro Azul ou bairro Azul, fica localizada no bairro nobre do Flamengo. Logo na entrada, a faixada é homenagem ao padre - Paulo Riou, que ajudou milhares de familias a construirem suas casas da comunidade.</p>

<h3> História da Comunidade</h3>
<p>O Morro Azul, para se configurar na favela que é atualmente, teria começado a ser habitado aproximadamente na década de 30 do século XX, entretanto deduz-se que os primórdios dessa ocupação, contaria para mais de um século antes. As terras do Morro, uma parte delas pertenceu a Ordem Terceira, que vendeu por uma bagatela, vastas metragens para moradores da parte rica, do lado de Botafogo, Rua Bento Manuel. Já, do lado de Laranjeiras, Rua Presidente Carlos Campos, tem condomínio que se expandiu até no topo do Morro Azul, se apossando inclusive de área que no passado era campinho de futebol da favela; levantaram um muro e construíram uma piscina. Noutra parte do alto do Morro Azul, no terreno do Abrigo Romão Duarte (Santa Casa de Misericórdia), os empresários do ramo de lutas marciais, Dedé Pederneiras e o campeão José Aldo construíram uma arena de lutas. O conjunto arquitetônico desse terreno vem do século XVIII, tendo sido residência do proprietário de quase toda a região hoje denominada de Botafogo, o Sr. José Fernandes, filho do conhecido contratador de diamantes Dr. João Fernandes de Oliveira (que viveu em Diamantina-MG, de 1755 a 1770) e da famosa ex-escrava Chica da Silva, que, teria financiado escravos libertários, muitos dos quais teriam usado o Morro Azul (antiga Chácara da Mangueiras) como trilha de fugas para construírem quilombos no interior das matas que cobriam a Zona Sul.</p>

        <h3>Onu em parceria com as Comunidade - Projetos de Melhorias</h3>
<p>O projeto de melhorias para as comunidades é uma iniciativa criada a partir do dialogo aberto de representantes das comunidades, a partir da voz dos moradores, com a Organização das Nações Unidas. O projeto visa melhorar a qualidade de vidas dos moradores com obras de infraestrutura nas comunidades, investimentos cruciais a partir do ponto de vista dos moradores e trazendo dignidade, lazer e cidadania. </p>

<h3>Pias Comunitárias</h3>
        <Imagem src={Pias} alt="Pias Comunitárias" />
        <p>As Pias Comunitárias foram instaladas no inicio da pandemia da Covid-19, visando o acesso a água potavel para higenização de todos. A iniciativa ajudou a comunidade não ter casos de Covid-19 e mudou a visão dos moradores aos cuidados basicos de saúde. O pedido de revitalização das pias comunitárias foram um dos principais pedidos dos moradores.</p>

<h3>Saneamento basico</h3>
        <Imagem src={Cano} alt="Cano de esgoto a céu aberto" />
        <p>Diferente de outras comunidades, o bairro Azul foi planejado graças a interferencia do Padre Paulo Riou que ajudou milhares de familias a construir suas casas legalmentes e com isso foi planejado os canos de esgoto de 70% das casas das comunidades. Porém os outros 30% da comunidade que não tem o planejamento de esgoto, isso implica a doenças a população e presença e lidam com o esgoto a céu aberto, sendo esse o segundo maior pedido entre os moradores para ONU </p>

<h3>Academia do Idoso e Praça</h3>
        <Imagem src={Praça} alt="local conhecido como praça da caixa d'agua" />
        <p>Dentre os pedidos dos moradores, enxergamos como urgência a criação de areas de lazer para crianças, adultos e idosos. Na comunidade já existe a quadra do Miolo, mas não existe nenhuma praça com brinquedos e aparelhos de academia para população. A criação da academia do adulto/idoso será na atual praça do Reservatório e praça das crianças ficará localizada ao lado do Bar dos amigos, no meio da comunidade.  </p>

<h3>Limpeza</h3>
        <Imagem src={Bueiro} alt="Bueiro entupido" />
        <p>A Comlurb tem um papel de suma importância no bairro Azul. Já existem 2 pontos de coleta de lixo, porém a comunidade sente falta dos serviços de limpeza nas ruas e principalmente nos bueiros da comunidade. Com a parceria da ONU, o pedido de limpeza chega a prefeitura com mais peso para melhorias que são pedido antigo dos moradores.</p>        
      
<h3>Conservação</h3>
        <Imagem src={Predio} alt="Fundos do Edificio Paulo VI" />
        <p>Ainda sobre a reiteração ao pedido de limpeza, vem junto o pedido de manutenção e conservação. Os fundos do predio mais antigo da comunidade fica ao lado da cabine da Unidade de Policia Pacificadora e ao lado da Creche, ambos sofrem a consequencia do descaso e falta de manutenção do fundo predio com a proliferação de mosquito e aparecimento de animais oriundos do esgoto. O pedido de conservação dos moradores também é mais um solicitado a parceria da Comlurb.</p>        
      </>
      
      
    );
  }
}
