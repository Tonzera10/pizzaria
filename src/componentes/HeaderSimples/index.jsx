import React from "react"
import logo from '../../img/logo.png'

import { PrimeiroElementoHeader, LogoImg, TextoH1Header } from "./styled.js"

const HeaderSimples = () => {

    return (
        <PrimeiroElementoHeader>
            <LogoImg src={logo} alt="Logo Labenu" />
            <TextoH1Header>Pizzaria Labenu</TextoH1Header>
        </PrimeiroElementoHeader>
    )
}

export default HeaderSimples