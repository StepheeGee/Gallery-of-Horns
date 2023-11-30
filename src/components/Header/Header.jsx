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
            <Form id="hornSelect">
              <Form.Select defaultValue="filter" onChange={handleFilterChange}>
              <option value="filter" disabled>Filter</option>
                <option value="all">All</option>
                <option value="1">One Horn</option>
                <option value="2">Two Horns</option>
                <option value="3">Three Horns</option>
                <option value="100">One Hundred Horns</option>
              </Form.Select>
            </Form>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
