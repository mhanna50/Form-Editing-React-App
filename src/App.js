import React, { useState } from 'react';
import HeaderInput from './components/HeaderInput';
import EmphasisTable from './components/EmphasisTable';
import EditForm from './components/EditForm';
import { writingCourses, speakingCourses } from './data/initialCourses';

const App = () => {
  const [studentName, setStudentName] = useState('');
  const [transferCredits, setTransferCredits] = useState(0);
  const [editingCourse, setEditingCourse] = useState(null);
  const [writeCourses, setWriteCourses] = useState(writingCourses);
  const [speakCourses, setSpeakCourses] = useState(speakingCourses);

  const getRequiredCourses = (allCourses, count) => allCourses.slice(0, count);

  const determineWritingCount = () => {
    if (transferCredits < 40) return 3;
    if (transferCredits <= 70) return 2;
    return 1;
  };

  const determineSpeakingCount = () => determineWritingCount(); // Same logic assumed

  const handleEditClick = (course) => setEditingCourse(course);

  const handleSave = (updatedCourse) => {
    const update = (courses) =>
      courses.map((c) => (c.id === updatedCourse.id ? updatedCourse : c));

    if (editingCourse.description.startsWith('Writing')) {
      setWriteCourses(update(writeCourses));
    } else {
      setSpeakCourses(update(speakCourses));
    }
    setEditingCourse(null);
  };

  const handleCancel = () => setEditingCourse(null);

  return (
    <div className="container mt-3">
      <HeaderInput
        studentName={studentName}
        transferCredits={transferCredits}
        setStudentName={setStudentName}
        setTransferCredits={setTransferCredits}
      />
      {studentName && (
        <>
          <EmphasisTable
            title="Writing Emphasis"
            courses={getRequiredCourses(writeCourses, determineWritingCount())}
            studentName={studentName}
            onEditClick={handleEditClick}
          />
          <EmphasisTable
            title="Speaking Emphasis"
            courses={getRequiredCourses(speakCourses, determineSpeakingCount())}
            studentName={studentName}
            onEditClick={handleEditClick}
          />
        </>
      )}
      {editingCourse && (
        <EditForm
          course={editingCourse}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default App;
