import React from 'react';
import NavBar from './NavBar';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import Img1 from '../Images/Pant-1.png';
import Img2 from '../Images/Pant-2.png';
import Img3 from '../Images/Pant-3.png';
import Img4 from '../Images/Pant-4.png';


const ColorCards = () => {
  return (
    <Container fluid className="mt-4 px-5">
      <NavBar />
      <Row>
        {/* Card 1 */}
        <Col xs={12} className="mb-4 mt-5">
          <Card bg="primary" text="white" className="shadow rounded-3">
            <Card.Body>
              <Card.Title>Sistema implementado</Card.Title>
              <Card.Text>
                El sitio web https://laindustries-cfa0c.web.app/Home es una aplicación desarrollada con React que ofrece una experiencia interactiva y moderna para los usuarios. Al ingresar, se presenta una interfaz limpia y organizada, facilitando la navegación y el acceso a las diferentes secciones del sitio. La estructura del sitio permite a los usuarios explorar información relevante de manera intuitiva, mejorando la usabilidad y la eficiencia en la interacción. Además, al estar alojado en Firebase, el sitio garantiza una alta disponibilidad y tiempos de carga rápidos, proporcionando una experiencia fluida y confiable para los visitantes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Imagen debajo de la primera tarjeta */}
        <Col xs={3} className="mb-4 mt-5 text-center">
          <Image
            src={Img1}
            alt="Ejemplo de backlog"
            fluid
            rounded
          />
          <p className="mt-2 text-muted">Figura 1</p>
        </Col>

        <Col xs={3} className="mb-4 mt-5 text-center">
          <Image
            src={Img2}
            alt="Ejemplo de backlog"
            fluid
            rounded
          />
          <p className="mt-2 text-muted">Figura 2. </p>
        </Col>

        <Col xs={3} className="mb-4 mt-5 text-center">
          <Image
            src={Img3}
            alt="Ejemplo de backlog"
            fluid
            rounded
          />
          <p className="mt-2 text-muted">Figura 3. </p>
        </Col>

        <Col xs={3} className="mb-4 mt-5 text-center">
          <Image
            src={Img4}
            alt="Ejemplo de backlog"
            fluid
            rounded
          />
          <p className="mt-2 text-muted">Figura 4.</p>
        </Col>








      </Row>
    </Container>
  );
};

export default ColorCards;

