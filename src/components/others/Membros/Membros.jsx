import React, { Component } from 'react';
import styled from 'styled-components';

class Membros extends Component	{
    constructor(props)	{
        super(props);
        
        this.state = {
            nome: props.nome
        };

        this.entrar = this.entrar.bind(this);
        // this.sair = this.sair.bind(this);
    }

    entrar()    {
        this.setState({nome: "Guest1697"})
    }

    // sair()    {
    //     this.setState({nome: "Visitante"})
    // }

    render()	{
        return (
            <Div>
                <p>
                    Bem-vindo(a) <span>{this.state.nome}</span>!
                </p>
                <button className="entrar" onClick={this.entrar}>Entrar</button>
                <button className="sair" onClick={() => this.setState({nome: "Usuário desconhecido"})}>Sair</button>
            </Div>
        );
    }
} 

export default Membros;

const Div = styled.div`
    p   {
        font-weight: 400;
        
        padding-bottom: 10px;
    }
    
    button  {
        border: none;

        border-radius: 5px;

        color: #FFFFFF;

        cursor: pointer;

        font-weight: bold;

        padding: 10px;

        margin: 5px;
    }

    .entrar  {
        background-color: #4f7E30;
    }

    .sair   {
        background-color: #8D2C11;
    }
`;