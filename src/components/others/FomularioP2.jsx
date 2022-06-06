import React, { Component } from 'react';
import styled from 'styled-components';

class FormularioP2 extends Component	{
    constructor(props)	{
        super(props);
        
        this.state = {
            nome: "",
            sobrenome: "",
            email: "",
            senha: "",
        };

        this.mostrarDados = this.mostrarDados.bind(this);
    }

    mostrarDados(event)  {
        const { nome, sobrenome, email, senha } = this.state;

        if(nome === "") alert("Informe o seu nome!");
        else if(sobrenome === "") alert("Informe o seu sobrenome!");
        else if(email === "") alert("Informe o seu email!");
        else if(senha === "") alert("Informe a sua senha!");
        else    {
            alert(
                `Nome: ${nome}
                \nSobrenome: ${sobrenome}
                \nEmail: ${email}
                \nSenha: ${senha}`
            );
        }

        event.preventDefault();
    }
    
    render()	{
        return (
            <Container>
                <p>Novo usuário</p>

                <form action="#" onSubmit={this.mostrarDados}>
                    <div>
                        <span>Nome</span>
                        <input type="text" placeholder="Digite o seu nome" value={this.state.nome} onChange={(event) => this.setState({nome: event.target.value})} />
                    </div>

                    <div>
                        <span>Sobrenome</span> 
                        <input type="text" placeholder="Digite o seu sobrenome" value={this.state.sobrenome} onChange={(event) => this.setState({sobrenome: event.target.value})} />
                    </div>

                    <div>
                        <span>Email</span>
                        <input type="email" placeholder="Digite o seu email" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} />
                    </div>

                    <div>
                        <span>Senha</span>
                        <input type="password" placeholder="Digite a sua senha" value={this.state.senha} onChange={(event) => this.setState({senha: event.target.value})} />
                    </div>

                    <div>
                        <input type="submit" value="Cadastrar" />
                    </div>
                </form>
            </Container>
        );
    }
} 

export default FormularioP2;

const Container = styled.div`
    align-items: center;

    display: flex;

    flex-direction: column;

    justify-content: center;

    height: 100%;

    p {
        font-weight: 200;

        padding-bottom: 20px;
    }

    div {
        align-items: center;

        display: flex;

        flex-direction: column;

        justify-content: center;
        
        margin-bottom: 20px;
    }

    div > input     {
        margin-top: 10px;
    }

    div > input[type=submit]     {
        background-color: #FFFFFF;

        border: 2px solid #F425A2;

        border-radius: 5px;

        color: #F425A2;

        padding: 10px;
    }

    div > input[type=submit]:hover     {
        background-color: #F425A2;

        color: #FFFFFF;

        cursor: pointer;
    }
`;

