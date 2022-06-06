import React from "react";

export default function DiretaFilho(props)  {
    return (
        <div style={{marginBottom: "10px"}}>
            <span>{props.nome} - </span>
            <span>{props.idade} - </span>
            <span>{props.nerd ? "Verdadeiro" : "Falso"}</span>
        </div>
    );
}