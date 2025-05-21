import React from 'react';
import NavBar from './NavBar';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import Img1 from '../Images/BackLog.png';
import Img2 from '../Images/sprint.png';
import Img3 from '../Images/HU.png';
import Img4 from '../Images/HU2.png';
import Img5 from '../Images/Calendario.png';

const ColorCards = () => {
  return (
    <Container fluid className="mt-4 px-5">
      <NavBar />
      <Row>
        {/* Card 1 */}
        <Col xs={12} className="mb-4">
          <Card bg="primary" text="white" className="shadow rounded-3">
            <Card.Body>
              <Card.Title>Planeación del producto (Product Backlog)</Card.Title>
              <Card.Text>
                La planeación del Product Backlog se realizó conforme al marco ágil Scrum, identificando inicialmente las funcionalidades clave del sistema de eCommerce a desarrollar. Cada funcionalidad fue traducida en historias de usuario (HU), priorizadas de acuerdo a su valor de negocio y complejidad técnica.

A continuación, se describe la planificación general del Product Backlog:
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Imagen debajo de la primera tarjeta */}
        <Col xs={12} className="mb-4 text-center">
          <Image
            src={Img1}
            alt="Ejemplo de backlog"
            fluid
            rounded
          />
          <p className="mt-2 text-muted">Figura 1. Planeación visual del backlog del producto</p>
        </Col>

     

        {/* Card 2 */}
        <Col xs={12} className="mb-4">
          <Card bg="warning" text="white" className="shadow rounded-3">
            <Card.Body>
              <Card.Title>Definición de historias de usuario</Card.Title>
              <Card.Text>Las historias de usuario representan una técnica ágil para capturar los requerimientos del sistema desde la perspectiva del usuario final. En este proyecto, se ha adoptado el formato estándar propuesto por Scrum para su redacción:</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={6} className="mb-4 text-center">
          <Image
            src={Img3}
            alt="Ejemplo de backlog"
            fluid
            rounded
          />
          <p className="mt-2 text-muted">Figura 1. Planeación visual del backlog del producto</p>
        </Col>

         <Col xs={6} className="mb-4 text-center">
          <Image
            src={Img4}
            alt="Ejemplo de backlog"
            fluid
            rounded
          />
          <p className="mt-2 text-muted">Figura 1. Planeación visual del backlog del producto</p>
        </Col>

           {/* Card 3 */}
        <Col xs={12} className="mb-4">
          <Card bg="success" text="white" className="shadow rounded-3">
            <Card.Body>
              <Card.Title>Sprints y sus entregables</Card.Title>
              <Card.Text>Tu planificación de sprints está dividida de forma lógica por historias de usuario (HU) agrupadas según funcionalidades clave del sistema, lo cual es una práctica adecuada en Scrum. A continuación te explico cómo se reflejan los sprints y cómo podrías resumir esa organización para tu entrega final:</Card.Text>
            </Card.Body>
          </Card>
        </Col>

         {/* Imagen debajo de la primera tarjeta */}
        <Col xs={12} className="mb-4 text-center">
          <Image
            src={Img2}
            alt="Ejemplo de backlog"
            fluid
            rounded
          />
          <p className="mt-2 text-muted">Figura 1. Planeación visual del backlog del producto</p>
        </Col>

        {/* Card 4 */}
        <Col xs={12} className="mb-4">
          <Card bg="danger" text="white" className="shadow rounded-3">
            <Card.Body>
              <Card.Title>Daily Scrum, revisiones, retrospectivas, etc.</Card.Title>
              <Card.Text>Retroalimentación y mejoras.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

                {/* Imagen debajo de la primera tarjeta */}
        <Col xs={12} className="mb-4 text-center">
          <Image
            src={Img5}
            alt="Ejemplo de backlog"
            fluid
            rounded
          />
          <p className="mt-2 text-muted">Figura 1. Planeación visual del backlog del producto</p>
        </Col>

      </Row>
    </Container>
  );
};

export default ColorCards;







































// import React from 'react';
// import NavBar from './NavBar';
// import { Card, Container, Row, Col } from 'react-bootstrap';

// const cardData = [
//   {
//     title: 'Planeación del producto (Product Backlog)',
//     text: 'Definición de historias de usuario, esfuerzo y prioridad para organizar los sprints.',
//     bg: 'primary'
//   },
//   {
//     title: 'Sprint 2',
//     text: 'Desarrollo de componentes base.',
//     bg: 'success'
//   },
//   {
//     title: 'Sprint 3',
//     text: 'Pruebas e integración.',
//     bg: 'warning'
//   },
//   {
//     title: 'Sprint 4',
//     text: 'Retroalimentación y mejoras.',
//     bg: 'danger'
//   }
// ];

// const ColorCards = () => {
//   return (
//     <Container fluid className="mt-4 px-5">
//       <NavBar />
//       <Row>
//         {cardData.map((card, index) => (
//           <Col key={index} xs={12} className="mb-4">
//             <Card bg={card.bg} text="white">
//               <Card.Body>
//                 <Card.Title>{card.title}</Card.Title>
//                 <Card.Text>{card.text}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default ColorCards;
