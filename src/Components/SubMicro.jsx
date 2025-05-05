import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';
import Header from './Header'

import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Img5 from '../Images/Horno-semi.jpg';




function ShapeExample() {
  return (
    <div>
      <NavBar />
      <Header />
      <Container className="imagenes-thumb w-100">
        <br />
        <h1 className="text-center mt-5 mb-5">Hornos de microondas</h1>
        <Row className="justify-content-center">
          <Col xs={6} md={4} className="mb-3 px-2" style={{ maxWidth: '300px', height: 'auto' }}>
            <Image src={Img5} thumbnail />
          </Col>
          <Col xs={6} md={4} className="mb-3 px-2" style={{ maxWidth: '300px', height: 'auto' }}>
            <Image src={Img5} thumbnail />
          </Col>
          <Col xs={6} md={4} className="mb-3 px-2" style={{ maxWidth: '300px', height: 'auto' }}>
            <Image src={Img5} thumbnail />
          </Col>
          <Col xs={6} md={4} className="mb-3 px-2" style={{ maxWidth: '300px', height: 'auto' }}>
            <Image src={Img5} thumbnail />
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default ShapeExample;