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
              <Card.Title>Código fuente (comprimido)
</Card.Title>
              <Card.Text>
                Aquí podrás descargar el código fuente de todo el sitio dando clic en el botón.
              </Card.Text>
            </Card.Body>
          </Card>

        </Col>

                          <a 
  href="https://github.com/NoeAvila26/UDG_Landing/archive/refs/heads/main.zip"
  className="btn btn-secondary"
  target="_blank"
  rel="noopener noreferrer"
>
  Descargar Código Fuente
</a>



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

