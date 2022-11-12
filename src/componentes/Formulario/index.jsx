import React from "react";
import { useState } from "react";
import { BoxFormulario, InputFormulario, BotaoFormulario } from "./styled";


export default function Formulario({setPagina, pagina}) {
    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [telefone, setTelefone] = useState("");

    const onChangeNome = (e) => {
        setNome(e.target.value)
        console.log(nome);
    }
    const onChangeEndereco = (e) => {
        setEndereco(e.target.value)
        console.log(endereco);
    }
    const onChangeNumero = (e) => {
        setNumero(e.target.value)
        console.log(numero);
    }
    const onChangeTelefone = (e) => {
        setTelefone(e.target.value)
        console.log(telefone);
    }

    // const previneRecarregar = (e) => {
    //     e.preventDefault()
    // } 

    const clickFinalizar = () => {
        alert("Pedido Finalizado!")
        setPagina(pagina=0)
    }

    return (
        <>
            <BoxFormulario>
                <InputFormulario onChange={onChangeNome} type='text' placeholder="Nome Completo" required/>
                <InputFormulario onChange={onChangeEndereco} type='text' placeholder="Endereço" required />
                <InputFormulario onChange={onChangeNumero} type='text' placeholder="nº da casa" required />
                <InputFormulario onChange={onChangeTelefone} type='tel' placeholder="Telefone" required />
                <BotaoFormulario onClick={clickFinalizar}>Finalizar Pedido</BotaoFormulario>
            </BoxFormulario>
        </>
    )
}