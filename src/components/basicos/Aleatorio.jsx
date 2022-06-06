import React from 'react';

export default function Aleatorio(props)  {
    const {minimo, maximo} = props;
    const aleatorio = parseInt(Math.random() * (maximo - minimo)) + minimo;

    return (
        <div>
            <h2>Valor aleatório</h2>
            <p>
                <strong>Valor mínimo:</strong> {minimo}
            </p>

            <p>
                <strong>Valor máximo:</strong> {maximo}
            </p>

            <p>
                <strong>Valor escolhido:</strong> {aleatorio}
            </p>
        </div>
    );
}