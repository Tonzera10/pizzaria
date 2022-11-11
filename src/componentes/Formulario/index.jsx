import React from "react";
import { useState } from "react";
import { BoxFormulario, InputFormulario, BotaoFormulario } from "./styled";


export default function Formulario() {
    return (
        <>
            <BoxFormulario>
                <InputFormulario type='text' placeholder="Nome Completo" required/>
                <InputFormulario type='text' placeholder="Endereço" required />
                <InputFormulario type='text' placeholder="nº da casa" required />
                <InputFormulario type='tel' placeholder="Telefone" required />
                <BotaoFormulario>Finalizar Pedido</BotaoFormulario>
            </BoxFormulario>
        </>
    )
}