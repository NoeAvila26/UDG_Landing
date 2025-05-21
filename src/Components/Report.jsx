import React from 'react';
import NavBar from './NavBar';
import { Card, Container, Row, Col, } from 'react-bootstrap';


const ColorCards = () => {
  return (
    <Container fluid className="mt-4  px-5">
      <NavBar />
      <Row>
        {/* Card 1 */}
        <Col xs={12} className="mb-4 mt-5">
          <Card bg="primary" text="white" className="shadow rounded-3">
            <Card.Body>
              <Card.Title>Cambios al diseño</Card.Title>
              <Card.Text>
             Durante el desarrollo del sitio se realizaron diversos ajustes de diseño con el objetivo de mejorar la experiencia visual y la navegación. Se incorporó un carrusel tanto en el banner principal como en la sección de marcas, lo cual permitió una presentación más dinámica y atractiva del contenido. Además, se optimizaron las imágenes utilizadas en todo el sitio, asegurando su correcta visualización y rendimiento en distintas resoluciones y dispositivos. La barra de navegación (navbar) fue rediseñada, integrando nuevos menús para facilitar el acceso a las secciones clave del sitio. También se mejoraron las descripciones de los productos y contenidos, aportando mayor claridad y valor informativo al usuario final.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

    

     

        {/* Card 2 */}
        <Col xs={12} className="mb-4">
          <Card bg="warning" text="white" className="shadow rounded-3">
            <Card.Body>
              <Card.Title>Nuevas funcionalidades</Card.Title>
              <Card.Text>Entre las nuevas funcionalidades incorporadas al sitio, se desarrolló un sistema de inicio de sesión (login) que permite brindar mayor seguridad y personalización al usuario. Asimismo, se mejoró la responsividad del sitio, asegurando una correcta adaptación a distintos tamaños de pantalla y dispositivos. Para facilitar la navegación, se añadió un acceso directo al inicio (Back to Home), visible desde cualquier sección del sitio, permitiendo al usuario regresar fácilmente a la página principal en todo momento.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

       

      

           {/* Card 3 */}
        <Col xs={12} className="mb-4">
          <Card bg="success" text="white" className="shadow rounded-3">
            <Card.Body>
              <Card.Title>Mejoras sugeridas</Card.Title>
              <Card.Text>- Optimizar las imagenes en cuanto a peso</Card.Text>
              <Card.Text>- Descripciones mas especificas</Card.Text>
            </Card.Body>
          </Card>
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
