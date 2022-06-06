import React from "react";

export default function Membro(props)  {
    return (
        <div style={{margin: "10px"}}>
            {props.nome} <span>{props.sobrenome}</span>
        </div>
    );
}