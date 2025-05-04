import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img4 from '../Images/1103483898.avif';
import Img5 from '../Images/Horno-semi.jpg';
import Img6 from '../Images/Licuadora-semi.jpg';
import Img7 from '../Images/Horno-Ind.jpg';

function GridExample() {
  return (
    <Container>
      <Row className="justify-content-center">
        
        {/* Primera Card */}
        <Col xs={12} md={6} className='d-flex'>
          <Card className="border-1 h-100 w-100">
            <Row className="g-2 align-items-center">
              <Col xs={4}>
                <img src={Img5} className="img-fluid rounded-start" alt="..." />
              </Col>
              <Col xs={8}>
                <Card.Body>
                  <Card.Title>HORNOS</Card.Title>
                  <Card.Text>This is a wider card with supporting text below.</Card.Text>
                  <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
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
                  <Card.Text>This is a wider card with supporting text below.</Card.Text>
                  <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
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
                  <Card.Title>HORNOS</Card.Title>
                  <Card.Text>This is a wider card with supporting text below.</Card.Text>
                  <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
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
                  <Card.Title>BATIDORAS</Card.Title>
                  <Card.Text>This is a wider card with supporting text below.</Card.Text>
                  <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
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
