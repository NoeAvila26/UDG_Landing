import React from 'react';
import {
  Container, Row, Col, Nav, Form, FormControl, Button
} from 'react-bootstrap';

function FooterExample() {
  return (
    <Container fluid className="bg-light text-dark mt-5 pt-5">
      <footer>
        <Container className="py-5">
          <Row className="g-4">
            {[1, 2 ].map((section) => (
              <Col xs={6} md={2} className="mb-3" key={section}>
                <h5>Section {section}</h5>
                <Nav className="flex-column">
                  {['Home', 'Features', 'Pricing', 'FAQs', 'About'].map((item, index) => (
                    <Nav.Link
                      key={index}
                      href="#"
                      className="p-0 text-muted"
                    >
                      {item}
                    </Nav.Link>
                  ))}
                </Nav>
              </Col>
            ))}

            <Col md={5} className="offset-md-1 mb-3">
              <Form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <FormControl
                    type="email"
                    placeholder="Email address"
                    className="me-2"
                  />
                  <Button variant="primary">Subscribe</Button>
                </div>
              </Form>
            </Col>
          </Row>

          <Row className="d-flex flex-column flex-md-row justify-content-between py-4 my-4 border-top">
            <Col className="mb-2">
              <p className="mb-0">&copy; 2024 Company, Inc. All rights reserved.</p>
            </Col>
            <Col className="d-flex justify-content-md-end">
              <ul className="list-unstyled d-flex mb-0">
                {['Twitter', 'Instagram', 'Facebook'].map((platform, i) => (
                  <li className="ms-3" key={i}>
                    <a className="text-muted" href={`https://www.${platform.toLowerCase()}.com`} target="_blank" rel="noopener noreferrer">
                      {platform}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
}

export default FooterExample;
