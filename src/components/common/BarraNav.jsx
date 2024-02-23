import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const BarraNav = () => {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="display-1 text-light">
          Calculadora - Higiene y Seguridad
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default BarraNav;
