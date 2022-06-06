import React, { Component } from 'react';
import styled from 'styled-components';

class CicloDeVida extends Component	{
    constructor(props)	{
        super(props);
        
        this.state = {
            hora: "00:00:00"
        };
    }
    
    componentDidMount() {
        setInterval(() => {
           this.setState({
               hora: new Date().toLocaleTimeString()
           }) 
        }, 1000);
    }

    componentDidUpdate()    {
        console.log("Componente atualizado!");
    }

    // shouldComponentUpdate() {

    // }

    render()	{
        return (
            <Div>
                <p>{this.state.hora}</p>
            </Div>
        );
    }
} 

export default CicloDeVida;

const Div = styled.div`
    align-items: center;
    
    display: flex;

    height: 100%;

    justify-content: center;
`;