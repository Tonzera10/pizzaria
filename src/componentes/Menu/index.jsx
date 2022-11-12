import React from 'react'
import { Titulo, MenuCards } from './styled'
import Card from "../Card"


const Menu = ({imgPizza}) => {

    const pizza = {
        nome: "Calabreza",
        preco: 40,
        imagem: imgPizza
      };
    
      const {nome, preco, imagem} = pizza;
    const pizza1 = {
        nome1: "Quatro Queijos",
        preco1: 40,
        imagem1: imgPizza
      };
    
      const {nome1, preco1, imagem1} = pizza1;
    const pizza2 = {
        nome2: "Coração",
        preco2: 45,
        imagem2: imgPizza
      };
    
      const {nome2, preco2, imagem2} = pizza2;
    const pizza3 = {
        nome3: "Bacon c/ Milho",
        preco3: 50,
        imagem3: imgPizza
      };
    
      const {nome3, preco3, imagem3} = pizza3;
    const pizza4 = {
        nome4: "Portuguesa",
        preco4: 45,
        imagem4: imgPizza
      };
    
      const {nome4, preco4, imagem4} = pizza4;
    const pizza5 = {
        nome5: "Basca",
        preco5: 50,
        imagem5: imgPizza
      };
    
      const {nome5, preco5, imagem5} = pizza5;

    return (
        <>
            <Titulo>MENU</Titulo>
            <MenuCards>    
                <Card nome={nome} preco={preco} imagem= {imagem}/>
                <Card nome={nome1} preco={preco1} imagem= {imagem1}/>
                <Card nome={nome2} preco={preco2} imagem= {imagem2}/>
                <Card nome={nome3} preco={preco3} imagem= {imagem3}/>
                <Card nome={nome4} preco={preco4} imagem= {imagem4}/>
                <Card nome={nome5} preco={preco5} imagem= {imagem5}/>
            </MenuCards>
        </>
    )
}

export default Menu