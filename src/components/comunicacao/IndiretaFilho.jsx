import React from "react";

export default function IndiretaFilho(props)  {
    const min = 50;
    const max = 70;
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
    return (
        <div style={{marginTop: "25px"}}>
            <div>
                <span>Filho</span>
            </div>
            <button onClick={() => {props.quandoClicar("João", gerarIdade(), true)}}>
                Fornecer Informações
            </button>
        </div>
    );
}