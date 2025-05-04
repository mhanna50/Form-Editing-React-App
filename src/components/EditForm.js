import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const EditForm = ({ course, onSave, onCancel }) => {
  const [formData, setFormData] = useState(course);

  useEffect(() => {
    setFormData(course);
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Form className="my-3 mx-auto" style={{ maxWidth: '95%' }}>
      <Form.Group className="mb-2">
        <Form.Label>Description</Form.Label>
        <Form.Control name="description" value={formData.description} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Semester</Form.Label>
        <Form.Control name="semester" value={formData.semester} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Prefix</Form.Label>
        <Form.Control name="prefix" value={formData.prefix} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Number</Form.Label>
        <Form.Control name="number" value={formData.number} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Grade</Form.Label>
        <Form.Control name="grade" value={formData.grade} onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" onClick={() => onSave(formData)} className="me-2">Save</Button>
      <Button variant="secondary" onClick={onCancel}>Cancel</Button>
    </Form>
  );
};

export default EditForm;
