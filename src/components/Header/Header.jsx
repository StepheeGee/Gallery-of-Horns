import React from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';

function Header({ title, handleFilterChange }) {
  return (
    <header>
      <Container fluid>
        <Row className="align-items-center">
          <Col>
            <h1>{title}</h1>
          </Col>
          <Col xs="auto">
            <Form>
              <Form.Select onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="1">One Horn</option>
                <option value="2">Two Horns</option>
                {/* Add other horn options */}
              </Form.Select>
            </Form>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
