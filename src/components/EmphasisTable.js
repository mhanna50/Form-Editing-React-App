import React from 'react';
import { Table, Button } from 'react-bootstrap';

const EmphasisTable = ({ title, courses, studentName, onEditClick }) => {
  return (
    <>
      <h4 className="mt-4 bg-primary text-white p-2 text-center">
        {title} for {studentName}
      </h4>
      <Table bordered className="mx-auto" style={{ maxWidth: '95%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Semester</th>
            <th>Prefix</th>
            <th>Number</th>
            <th>Grade</th>
            <th>Editing</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.description}</td>
              <td>{course.semester}</td>
              <td>{course.prefix}</td>
              <td>{course.number}</td>
              <td>{course.grade}</td>
              <td>
                <Button variant="warning" onClick={() => onEditClick(course)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default EmphasisTable;
