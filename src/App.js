import React from "react";
import Background from "../src/img/Fundo1.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projetos from "./components/Projetos";
import Home from "./components/Home";
import Onu from "./components/Onu";


import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body{
  background-image: url(${Background});
  background-size: cover;
}


ul{
    display: inline-block;
    width: 95%;
    text-align: center;
    word-spacing: 50px;
  }
  li{
    display: inline;
    margin-left: 150px;
    font-weight: 600px;
    font-size: 20px;
    cursor: pointer;
  }
h1{
    padding: 10px;
    color: #4B06A3;
    display: flex;
    height: 60px; 
}
h2{
  padding: 10px;
    color: #4B06A3;
    display: flex;
    height: 40px; 
}

h3{
    color: #4B06A3;
    padding: 10px; 
    font-size: 20px;
}
h4{
color: white;
margin-top: 80px;
margin-left: 20px;
align-self: flex-end;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

h5{
    color: #4B06A3;
    display: flex;
    height: 35px; 
    font-size: 25px;
    margin-left:525px;
    margin-top: 30px;
}

.caixas{
  margin-top: 10px;
  margin-left: 7%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.caixa1{
  background: red;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  width: 180px;
  height: 180px;
  align-self: flex-start;
}
.caixa2{
  background: #efff26;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  width: 180px;
  height: 180px;
  align-self: flex-start;
}

.caixa3{
  background: #2FF53E;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  width: 180px;
  height: 180px;
  align-self: flex-start;
}

.caixa4{
  background: #34F6F9;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  width: 180px;
  height: 180px;
  align-self: flex-start;
}
  .caixa5{
  background: #BB48B6;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  width: 180px;
  height: 180px;
  align-self: flex-start;


}

.links{
  margin-top: 10px;
  margin-left: 37%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 1.8em;
  border-color: #f8deeb;
 
}
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: #4B06A3;
  font-weight: bolder;
`;

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />

        <ul>
          <li>
            <SLink to="/">Home</SLink>
          </li>
          <li>
            <SLink to="/onu">ONU</SLink>
          </li>
          <li>
            <SLink to="/projetos">Projetos</SLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onu" element={<Onu />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </Router>
    );
  }
}
