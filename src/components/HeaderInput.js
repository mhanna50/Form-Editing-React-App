import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const HeaderInput = ({ studentName, transferCredits, setStudentName, setTransferCredits }) => {
  return (
    <Form className="my-3">
      <Row>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Student Name:</Form.Label>
            <Form.Control
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Enter Name"
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Total Transfer Credits:</Form.Label>
            <Form.Control
              type="number"
              value={transferCredits}
              onChange={(e) => setTransferCredits(Number(e.target.value))}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default HeaderInput;
