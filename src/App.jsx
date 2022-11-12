import Footer from "./componentes/Footer/index.jsx";
import { GlobalStyle } from "./GlobalStyle.js";
import Formulario from "./componentes/Formulario/index.jsx";
import HeaderSimples from "./componentes/HeaderSimples/index.jsx";
import Header from "./componentes/Header"
import Menu from "./componentes/Menu"
import { useState } from "react";
import imgPizza from "../src/img/pizza-calabresa.png"


function App() {
  const [pagina, setPagina] = useState(0);

  return (
    <div>
      <GlobalStyle />
      {pagina === 0 ? 
      <>
        <HeaderSimples />
        <Header setPagina={setPagina} pagina={pagina}/>
        <Menu imgPizza={imgPizza}/>
      </>
      :
      <>
        <HeaderSimples />
        <Formulario />
      </>
      }
      <Footer />
    </div>
  );
}

export default App;
