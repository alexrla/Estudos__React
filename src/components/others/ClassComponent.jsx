import React, { Component } from 'react';
import styled from 'styled-components';

class ClassComponent extends Component	{
    constructor(props)	{
        super(props);
        
        this.state = {
            number: 0
        };
        
        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
    }
    
    add()	{
        let state = this.state;

        state.number += 1;

        this.setState(state);
    }

    sub()	{
        let state = this.state;

        state.number -= 1;

        this.setState(state);
    }
    
    render()	{
        return (
            <Div>
                <button onClick={this.sub}> - </button>
                <span>{this.state.number}</span>
                <button onClick={this.add}> + </button>
            </Div>
        );
    }
} 

export default ClassComponent;

const Div = styled.div`
    align-items: center;

    display: flex;

    height: 100%;

    justify-content: center;

    width: 100%;
    
    button {
        border: none;

        border-radius: 5px;

        color: #FFFFFF;

        cursor: pointer;

        height: 30px;

        width: 30px;
    }

    button:first-child  {
        background-color: #B9362A;
    }

    button:last-child  {
        background-color: #4653A4;
    }

    span    {
        padding: 0 15px;
    }
`;