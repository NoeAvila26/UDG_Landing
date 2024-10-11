import React from 'react';
import {
  Container, Row, Col, Nav, NavItem, NavLink, Form, FormControl, Button} from 'react-bootstrap';

function FooterExample() {
  return (
    <Container className="py-5">
      <footer>
        <Row style={{marginTop:'100px'}}>
          <Col  xs="6" md="2" className="mb-3">
            <h5>Section</h5>
            <Nav vertical>
              <NavItem>
                <NavLink href="#" className="p-0 text-body-secondary">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="p-0 text-body-secondary">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="p-0 text-body-secondary">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="p-0 text-body-secondary">FAQs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="p-0 text-body-secondary">About</NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col xs="6" md="2" className="mb-3">
            <h5>Section</h5>
            <Nav vertical>
              <NavItem>
                <NavLink href="#" className="p-0 text-body-secondary">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="p-0 text-body-secondary">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="p-0 text-body-secondary">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="p-0 text-body-secondary">FAQs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="p-0 text-body-secondary">About</NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col xs="6" md="2" className="mb-3">
            <h5>Section</h5>
            <Nav vertical>
              <NavItem>
                <NavLink href="#" className="p-0 text-body-secondary">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="p-0 text-body-secondary">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="p-0 text-body-secondary">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="p-0 text-body-secondary">FAQs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="p-0 text-body-secondary">About</NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col md="5" className="offset-md-1 mb-3">
            <Form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <FormControl id="newsletter1" type="text" placeholder="Email address" />
                <Button color="primary" type="button">Subscribe</Button>
              </div>
            </Form>
          </Col>
        </Row>

        <Row className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <Col>
            <p>&copy; 2024 Company, Inc. All rights reserved.</p>
          </Col>
          <Col>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a href="https>//google.com" className="link-body-emphasis">Twitter</a></li>
              <li className="ms-3"><a href="https>//google.com" className="link-body-emphasis">Instagram</a></li>
              <li className="ms-3"><a href="https>//google.com" className="link-body-emphasis">Facebook</a></li>
            </ul>
          </Col>
        </Row>
      </footer>
    </Container>
  );
}

export default FooterExample;