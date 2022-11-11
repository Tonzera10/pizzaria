import React from "react";
import './styled.js'
import { Botao } from "./styled.js";

const Button = () => {

    function adicionaCarrinho() {
        alert('Sua pizza já vai começar a ser preparada.')
    }

    return (
        <Botao onClick="">Adicionar</Botao>
    )
}

export default Button