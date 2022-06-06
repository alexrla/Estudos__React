import React, { useState } from "react";

import IndiretaFilho from './IndiretaFilho';

export default function IndiretaPai(props)  {
    const [nomePai, setNomePai] = useState("?");
    const [idadePai, setIdadePai] = useState(0);
    const [nerdPai, setNerdPai]  = useState(false);

    function fornecerInformacoes(nome, idade, nerd) {
        setNomePai(nome);
        setIdadePai(idade);
        setNerdPai(nerd);
    }
    
    return (
        <div>
           <div>
               <span>Pai</span>
               <div style={{marginTop: "5px"}}>Nome: <span>{nomePai}</span></div>
               <div>Idade: <span>{idadePai}</span></div>
               <div>É nerd: <span>{nerdPai ? "verdadeiro" : "falso"}</span></div>
           </div>

            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    );
}
