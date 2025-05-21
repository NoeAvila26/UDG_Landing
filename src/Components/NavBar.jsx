import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';



function NavScrollExample() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Home'); // Redirige a la ruta que agregaste
  };

  const handleClick2 = () => {
    navigate('/Activities'); // Redirige a la ruta que agregaste
  };

    const handleClick3 = () => {
    navigate('/System'); // Redirige a la ruta que agregaste
  };

    const handleClick4 = () => {
    navigate('/Download'); // Redirige a la ruta que agregaste
  };

      const handleClick5 = () => {
    navigate('/Report'); // Redirige a la ruta que agregaste
  };



  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">IndustriesLA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" onClick={handleClick}>Home</Nav.Link>
            <Nav.Link href="#action2">Productos</Nav.Link>
            <NavDropdown title="Actividades" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" onClick={handleClick2}>Actividades realizadas</NavDropdown.Item>
              <NavDropdown.Item href="#action4" onClick={handleClick3}>
                Sistema implementado
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" onClick={handleClick4}>
                Código fuente
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5" onClick={handleClick5}>
                Reporte
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Refacciones
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample


