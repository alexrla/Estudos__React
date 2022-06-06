import React, { Component } from 'react';
import styled from 'styled-components';

class Formulario extends Component	{
    constructor(props)	{
        super(props);
        
        this.state = {
            form: {
                nome: "",
                email: "",
                senha: "",
                genero: ""
            }
        };

        this.alterarDados = this.alterarDados.bind(this);
    }

    alterarDados(event) {
        let form = this.state.form;

        // Pegando o name do input e passando a nova entrada
        form[event.target.name] = event.target.value;

        this.setState({form: form});
    }

    render()	{
        return (
            <Container>
                <p>Login</p>

                <Nome>
                    Nome:
                    <input type="text" name="nome" value={this.state.form.nome} onChange={this.alterarDados} />
                </Nome>

                <Email>
                    Email:
                    <input type="email" name="email" value={this.state.form.email} onChange={this.alterarDados} />
                </Email>

                <Senha>
                    Senha:
                    <input type="password" name="senha" value={this.state.form.senha} onChange={this.alterarDados} />
                </Senha> 

                <Genero>
                    Gênero:
                    <select name="genero" value={this.state.form.genero} onChange={this.alterarDados} >
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                </Genero>

                <Div>
                    <input type="submit" value="Entrar" />
                </Div>
            </Container>
        );
    }
} 

export default Formulario;

const Container = styled.div`
    align-items: center;

    display: flex;

    flex-direction: column;

    justify-content: center;

    height: 100%;

    p   {
        padding-bottom: 30px;
    }
`;

const Nome = styled.div`
    align-items: center;

    display: flex;

    justify-content: center;

    margin-bottom: 20px;

    input   {
        margin-left: 10px;
    }
`;

const Email = styled.div`
    align-items: center;

    display: flex;

    justify-content: center;

    margin-bottom: 20px;

    input   {
        margin-left: 10px;
    }
`;

const Senha = styled.div`
    align-items: center;

    display: flex;

    justify-content: center;

    margin-bottom: 20px;

    input   {
        margin-left: 20px;
    }
`;

const Genero = styled.div`
    display: flex;

    justify-content: center;

    margin-bottom: 20px;

    select   {
        margin-left: 10px;
    }
`;

const Div = styled.div`
    input   {
        background-color: #FFFFFF;

        border: 2px solid #5A75ED;

        border-radius: 5px;

        color: #5A75ED;

        padding: 10px;
    }

    input:hover  {
        background-color: #5A75ED;

        color: #FFFFFF;

        cursor: pointer;
    }
`;