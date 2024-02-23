import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import BarraNav from "./components/common/BarraNav";
import Titulo from "./components/Titulo";
import FormularioCalculadora from "./components/FormularioCalculadora";
import Footer from "./components/common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <BarraNav />
      <Container className="contenedorPrincipal">
        <Routes>
          <Route exact path="/" element={<Titulo />}></Route>
        </Routes>
        <FormularioCalculadora className="mainSection" />
      </Container>
      <Footer className="footer" />
    </BrowserRouter>
  );
}

export default App;
