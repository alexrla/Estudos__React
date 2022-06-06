import React, { Component } from 'react';

import styled from 'styled-components';

class RenderizacaoCondicional extends Component	{
    constructor(props)	{
        super(props);
        
        this.state = {
            status: false
        };
    }

    render()	{
        return (
            <Div>
                {this.state.status ?
                        <div>
                            <p>Usuário logado</p>
                            <button onClick={() => this.setState({status: false})}>Deslogar</button>
                        </div>
                    :
                        <div>
                            <p>Bem-vindo!</p>
                            <button onClick={() => this.setState({status: true})}>Logar</button>
                        </div>
                }
            </Div>
        );
    }
} 

export default RenderizacaoCondicional;

const Div = styled.div`
    div > p {
        padding-bottom: 10px;
    }
    
    button  {
        background-color: #FFFFFF;

        border: 2px solid #A4B3E5;

        border-radius: 5px;

        cursor: pointer;

        color: #A4B3E5;

        padding: 10px;
    }  

    button:hover    {
        background-color: #A4B3E5;

        color: #FFFFFF;
    }
`;