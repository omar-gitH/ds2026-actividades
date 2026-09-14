import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Asegúrate de que la ruta sea correcta

export default function Header() {
  const navigate = useNavigate();
  
  // Extraemos la información de la sesión desde el contexto
  const { usuario, logout, tieneRol } = useAuth();

  const manejarSesion = () => {
    if (usuario) {
      logout();
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">📚 Mi Librería</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
            {tieneRol('ADMIN') && (
              <Nav.Link as={Link} to="/libros/nuevo">Nuevo libro</Nav.Link>
            )}
            
            {/* --- Lógica de sesión --- */}
            {usuario && (
              <Navbar.Text className="text-light ms-lg-3 me-3">
                Hola, {usuario.nombre}
              </Navbar.Text>
            )}
            <Button 
              variant="outline-light" 
              size="sm" 
              className="ms-lg-2 mt-2 mt-lg-0" 
              onClick={manejarSesion}
            >
              {usuario ? 'Salir' : 'Ingresar'}
            </Button>
            {/* ------------------------ */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}