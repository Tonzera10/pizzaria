import Footer from "./componentes/Footer/index.jsx";
import { GlobalStyle } from "./GlobalStyle.js";
import Formulario from "./componentes/Formulario/index.jsx";
import HeaderSimples from "./componentes/HeaderSimples/index.jsx";
import Header from "./componentes/Header"
import Menu from "./componentes/Menu"


function App() {

  return (
    <div>
      <GlobalStyle />
      <HeaderSimples />
      <Header/>
      <Menu/>
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
