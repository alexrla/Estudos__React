import React from "react";

export default function ParOuImpar(props)   {
    const ePar = props.numero % 2 === 0;

    return (
        <div style={{marginBottom: "10px"}}>
            {ePar ? <span>{props.numero} é par</span> : <span>{props.numero} é ímpar</span>}
        </div>
    );
}