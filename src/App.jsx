import React from 'react';
import styled from 'styled-components';

import Card from "./components/layout/Card";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from './components/basicos/Familia';
import Membro from "./components/basicos/Membro";
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';


export default function App(props) {
  return (
    <Container className="App">
        <h1>Estudos React</h1>

        <div className="cards">
            <Card titulo="#01 - Primeiro" cor="#FA6900">
                <Primeiro />
            </Card>

            <Card titulo="#02 - Com parâmetro" cor="#E94C6F">
                <ComParametro titulo="Segundo componente" subtitulo="Muito legal!" />
            </Card>

            <Card titulo="#03 - Fragmento" cor="#E8B71A">
                <Fragmento />
            </Card>

            <Card titulo="#04 - Desafio Aleatório" cor="#588C73">
                <Aleatorio minimo={0} maximo={100}/>
            </Card>

            <Card titulo="#05 - Componentes com filhos" cor="#00C8F8">
                <Familia sobrenome="Arruda">
                    <Membro nome="Pedro" />
                    <Membro nome="Ana" />
                    <Membro nome="Gustavo" /> 
                </Familia>
            </Card>

            <Card titulo="#06 - Repetição" cor="#FF4C65">
                <ListaAlunos />
            </Card>

            <Card titulo="#07 - Desafio Repetição" cor="#3A9AD9">
                <TabelaProdutos />
            </Card>
        </div>
    </Container>
  );
}

const Container = styled.div`
  .cards  {
    display: flex;

    flex-wrap: wrap;

    justify-content: center;
  }
`;