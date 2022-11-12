import React from "react"
import Button from "../Button"
import { CardEstilizado, TextoH4, ImagemCard, TextoValor, TextoParagrafo, Etiqueta, CheckBox } from "./styled"

const Card = ({nome, preco, imagem}) => {

    return (
        <div>
            <CardEstilizado>
                <TextoParagrafo>Sabor:</TextoParagrafo>

                <TextoH4>{nome}</TextoH4>

                <ImagemCard src={imagem} />

                <TextoValor>Preço: {preco}</TextoValor>

                <TextoParagrafo>Tamanho:</TextoParagrafo>

                <CheckBox>

                    <Etiqueta>
                        <input type="checkbox" />
                        Pequena
                    </Etiqueta>

                    <Etiqueta>
                        <input type="checkbox" />
                        Média
                    </Etiqueta>

                    <Etiqueta>
                        <input type="checkbox" />
                        Grande
                    </Etiqueta>
                </CheckBox>

            </CardEstilizado>
            <Button />
        </div>
    )
}

export default Card