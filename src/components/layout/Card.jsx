import React from 'react';
import styled from 'styled-components';

export default function Card(props) {
    const style =  {
        backgroundColor: props.cor || "#FF0000",
        borderColor: props.cor || "#FF0000"
    }; 

    return (
        <Container className="card" style={style}>
            <Title className="titulo">
                {props.titulo}
            </Title>

            <Content className="conteudo">
                {props.children}
            </Content>
        </Container>
    );
}

const Container = styled.div`
    border: 3px solid;

    border-radius: 10px;

    display: flex;

    flex-direction: column;

    margin: 10px;

    max-width: 500px;

    min-width: 300px;

    overflow: hidden;
`;

const Title = styled.div`
    display: flex;

    justify-content: center;

    padding: 5px 0px;
`;

const Content = styled.div`
    align-items: center;

    background-color: #FFFFFF;

    color: #000000;

    display: flex;

    flex-grow: 1;

    flex-direction: column;

    justify-content: center;

    padding: 10px;
`;