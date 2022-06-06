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
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from "./components/formulario/Input";
import StateLessComponent from "./components/others/StateLessComponent";
import ClassComponent from "./components/others/ClassComponent";
import CicloDeVida from "./components/others/CicloDeVida";
import Eventos from "./components/others/Eventos";
import RenderizacaoCondicional from './components/others/RenderizacaoCondicional';
import Listas from "./components/others/Listas";
import Formulario from "./components/others/Formulario";
import FormularioP2 from "./components/others/FomularioP2";

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

            <Card titulo="#08 - Renderização Condicional" cor="#982395">
                <ParOuImpar numero={20} />
                <UsuarioInfo usuario={{nome: "Alex"}}/>
            </Card>

            <Card titulo="#09 - Comunicação Direta" cor="#59323C">
                <DiretaPai />
            </Card>

            <Card titulo="#10 - Comunicação Indireta" cor="#8BAD39">
                <IndiretaPai />
            </Card>

            <Card titulo="#11 - Componente Controlado" cor="#E45F56">
                <Input />
            </Card>

            <Card titulo="#12 - Statelles Component (componente funcional sem estado)" cor="#429DA9">
                <StateLessComponent nome="Alex" />
            </Card>

            <Card titulo="#13 - Class Component (componente de classe)" cor="#6983D4">
                <ClassComponent />
            </Card>

            <Card titulo="#14 - Ciclo de vida dos componentes" cor="#E6877A">
                <CicloDeVida />
            </Card>

            <Card titulo="#15 - Eventos" cor="#A9BDB5">
                <Eventos />
            </Card>

            <Card titulo="#16 - Renderização Condicional p/2" cor="#DEBE97">
                <RenderizacaoCondicional />
            </Card>

            <Card titulo="#17 - Trabalhando com listas" cor="#B2E0B1">
                <Listas />
            </Card>

            <Card titulo="#18 - Formulário p/1" cor="#E08600">
                <Formulario />
            </Card>

            <Card titulo="#19 - Formulário p/2" cor="#E75253">
                <FormularioP2 />
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