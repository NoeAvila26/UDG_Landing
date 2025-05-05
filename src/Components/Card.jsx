import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Img4 from '../Images/1103483898.avif';
import Img5 from '../Images/Horno-semi.jpg';
import Img6 from '../Images/Licuadora-semi.jpg';
import Img7 from '../Images/Horno-Ind.jpg';

function GridExample() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/submicro'); // Redirige a la ruta que agregaste
  };

  return (
    <Container>
      <Row className="justify-content-center">

        {/* Primera Card */}
        <Col xs={12} md={6} className='d-flex'>
          <Card className="border-1 h-100 w-100">
            <Row className="g-2 align-items-center">
              <Col xs={4}>
                <img src={Img5} className="img-fluid rounded-start" alt="..." onClick={handleClick} />
              </Col>
              <Col xs={8}>
                <Card.Body>
                  <Card.Title>MICROONDAS</Card.Title>
                  <Card.Text>Las mejores marcas</Card.Text>
                  <Card.Text>
                    <Button variant="secondary" size="sm" onClick={handleClick}>
                    Encuentralas aquí
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Segunda Card */}
        <Col xs={12} md={6} className='d-flex'>
          <Card className="border-1 h-100 w-100">
            <Row className="g-2 align-items-center">
              <Col xs={4}>
                <img src={Img4} className="img-fluid rounded-start" alt="..." />
              </Col>
              <Col xs={8}>
                <Card.Body>
                  <Card.Title>BATIDORAS</Card.Title>
                  <Card.Text>Las mejores batidoras</Card.Text>
                  <Card.Text>
                  <Button variant="secondary" size="sm">
                      Encuentralas aquí
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Tercer Card */}
        <Col xs={12} md={6} className='d-flex mt-4'>
          <Card className="border-1 h-100 w-100">
            <Row className="g-2 align-items-center">
              <Col xs={4}>
                <img src={Img6} className="img-fluid rounded-start" alt="..." />
              </Col>
              <Col xs={8}>
                <Card.Body>
                  <Card.Title>LICUADORAS</Card.Title>
                  <Card.Text>This is a wider card with supporting text below.</Card.Text>
                  <Card.Text>
                  <Button variant="secondary" size="sm">
                      Small button
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Cuarta Card */}
        <Col xs={12} md={6} className='d-flex mt-4'>
          <Card className="border-1 h-100 w-100">
            <Row className="g-2 align-items-center">
              <Col xs={4}>
                <img src={Img7} className="img-fluid rounded-start" alt="..." />
              </Col>
              <Col xs={8}>
                <Card.Body>
                  <Card.Title>HORNOS</Card.Title>
                  <Card.Text>This is a wider card with supporting text below.</Card.Text>
                  <Card.Text>
                  <Button variant="secondary" size="sm">
                      Small button
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>


      </Row>
    </Container>
  );
}

export default GridExample;
