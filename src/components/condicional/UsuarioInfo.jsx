import React from "react";

import If, {Else} from "./If";

export default function UsuarioInfo(props)  {
    const usuario = props.usuario || {};

    return (
        <div>
            <If teste={usuario && usuario.nome}>
                Seja bem-vindo <span>{usuario.nome}</span>!

                <Else>
                    Seja bem-vindo <span>Anônimo</span>!
                </Else>
            </If>
        </div>
    );
}