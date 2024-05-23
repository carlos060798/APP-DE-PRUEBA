import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarAdmin() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="p-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-3 fw-bold">
          Admin Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="fs-5">
            <Nav.Link as={Link} to="/" className="mx-2">
              Users
            </Nav.Link>
            <Nav.Link as={Link} to="/create" className="mx-2">
              Create User
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="mx-2">
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/roles/create" className="mx-2">
              Crear Rol
            </Nav.Link>
            <Nav.Link as={Link} to="/sales" className="mx-2">
              Ventas
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarAdmin;