import styled from "styled-components"
import ImgFundo from "../../img/pizza-de-fundo.png"

export const Topo = styled.header`
    display: flex;
    flex-direction: column;
`

/* ------------------Segundo--------------------------- */

export const SegundoElemento = styled.div`
    background-image: url(${ImgFundo});
    background-color: black;
    background-repeat: no-repeat;
    background-size: 100vw 50vh;
    height: 50vh;
    display: flex;

`
export const TextoH3 = styled.h3`
    font-size: 60px;
    width: 30vw;
    margin-left: 30px;
    color: #fff;
    align-self: center;
`

// /* -----------------Terceiro---------------------- */

export const TerceiroElemento = styled.nav`
    background-color: #FBEFDF;
`
export const Lista = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style-type: none;
`

export const ImagemNav = styled.img`
    width: 5vw;
    padding: 5px;
`


