import React from 'react';
import styled from 'styled-components';

import produtos from '../../data/produtos';

export default function TabelaProdutos(props)  {
    function pegarDados()   {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? "par" : ""}>
                    <td><span>{produto.id}</span></td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
                </tr>
            )
        })
    }

    return (
        <Container className="tabela">
            {/* <table border="1"> */}
            <table border={1}>
                <thead>
                    <tr>
                        <th>
                            <span>Id</span>
                        </th>

                        <th>
                            <span>Nome</span>
                        </th>

                        <th>
                            <span>Preço</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {produtos.map((produto, i) => (
                        <tr key={produto.id} className={i % 2 === 0 ? "par" : ""}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>R$ {produto.preco}</td>
                        </tr>
                    ))} */}
                    {pegarDados()}
                </tbody>
            </table>
        </Container>
    );
}

const Container = styled.div`
    display: flex;

    justify-content: center;

    .par    {
        background-color: #DADADA; 
    }

    table   {
        

        width: 100%;
    }

    th, td   {
        padding: 10px;

        border: 1px solid #000000;
    }
`;