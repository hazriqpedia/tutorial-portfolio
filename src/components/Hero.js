import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

function Hero(props) {
  return (
    <Jumbotron className="jumbotron-fluid bg-transparent p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            {props.title && (
              <h1 className="display-1 font-weight-bolder">{props.title}</h1>
            )}
            {props.subtext && (
              <h3 className="display-4 font-weight-light">{props.subtext}</h3>
            )}
            {props.opener && (
              <h4 className="lead font-weight-light">
                <i>{props.opener}</i>
              </h4>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
