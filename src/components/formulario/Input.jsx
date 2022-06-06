import React, { useState } from "react";
import styled from 'styled-components';

export default function Input(props)    {
    const [valor, setValor] = useState("inicial");

    function quandoMudar(evento)    {
        setValor(evento.target.value)
    }

    return (
        <Container className="input">
            <span>{valor}</span>
            
            <div style={{display: "flex", flexDirection: "column", marginTop: "10px"}}>
                <input type="text" value={valor} onChange={quandoMudar} />
                <input type="text" value={valor} readOnly />
                <input type="text" value={undefined} />
            </div>
        </Container>
    );
}

const Container = styled.div`
    input   {
        font-size: 1.4rem;
    }
` ;