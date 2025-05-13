import React from 'react';
import NavBar from './NavBar';
import { Card, Button, Row, Col, Image} from 'react-bootstrap';
import Img1 from '../Images/amana-HDC18SD2-1.jpg';



const ProductCard = ({ image, title, description, onAddToCart }) => {
  return (
    <div>
      <NavBar />
          <Card className="p-3 my-2 shadow-sm">
      <Row className="align-items-center">
        <Col md={3}>
          <Image src={Img1} alt={title} fluid rounded />
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title>Microondas Amana </Card.Title>
            <Card.Text>Microondas de uso Industrial</Card.Text>
          </Card.Body>
        </Col>
        <Col md={3} className="text-end">
          <Button variant="primary" onClick={onAddToCart}>
            Agregar al carrito
          </Button>
        </Col>
      </Row>
    </Card>
    </div>
  );
};

export default ProductCard;
