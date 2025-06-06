import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

import NavBar from './NavBar';
import Header from './Header'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Img1 from '../Images/batidora-adobestock2.jpg';
import Img2 from '../Images/batidora-gen2.jpg';
import Img3 from '../Images/batidora-vevor450-2.jpg';


function ShapeExample() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ProductBatidora'); 
  };

  return (
    <div>
      <NavBar />
      <Header />
      <Container className="imagenes-thumb w-100">
        <br />
        <h1 className="text-center mt-5 mb-5">Batidoras</h1>
        <Row className="justify-content-center">
          <Col xs={6} md={4} className="mb-4 px-2" style={{ maxWidth: '300px' }}>
            <Card>
              <Card.Img variant="top" src={Img1} />
              <Card.Body>
                <Card.Title>Kitchen Aid Q1</Card.Title>
                <Card.Text>
                  Batidora de uso comercial, ideal para cocinas industriales.
                </Card.Text>
              </Card.Body>
              <Button variant="secondary" size="sm" onClick={handleClick}>
                Ver
              </Button>
            </Card>
          </Col>

          <Col xs={6} md={4} className="mb-4 px-2" style={{ maxWidth: '300px' }}>
            <Card>
              <Card.Img variant="top" src={Img2} />
              <Card.Body>
                <Card.Title>Kitchen Aid Q2</Card.Title>
                <Card.Text>
                  Batidora de uso comercial, ideal para cocinas industriales.
                </Card.Text>
              </Card.Body>
              <Button variant="secondary" size="sm">
                Ver
              </Button>
            </Card>
          </Col>

          <Col xs={6} md={4} className="mb-4 px-2" style={{ maxWidth: '300px' }}>
            <Card>
              <Card.Img variant="top" src={Img3} />
              <Card.Body>
                <Card.Title>Kitchen Aid Q3</Card.Title>
                <Card.Text>
                  Batidora de uso comercial, ideal para cocinas industriales.
                </Card.Text>
              </Card.Body>
              <Button variant="secondary" size="sm">
                Ver
              </Button>
            </Card>
          </Col>


          {/* <Col xs={6} md={4} className="mb-3 px-2" style={{ maxWidth: '300px', height: 'auto' }}>
            <Image src={Img5} thumbnail />
            <p className="mt-2 mb-0 fw-semibold">Amana CX10</p>
          </Col>
          <Col xs={6} md={4} className="mb-3 px-2" style={{ maxWidth: '300px', height: 'auto' }}>
            <Image src={Img5} thumbnail />
          </Col>
          <Col xs={6} md={4} className="mb-3 px-2" style={{ maxWidth: '300px', height: 'auto' }}>
            <Image src={Img5} thumbnail />
          </Col>
          <Col xs={6} md={4} className="mb-3 px-2" style={{ maxWidth: '300px', height: 'auto' }}>
            <Image src={Img5} thumbnail />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}


export default ShapeExample;