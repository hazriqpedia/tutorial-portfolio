import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            Hazriq I.
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            Made with love from KL, MY.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
