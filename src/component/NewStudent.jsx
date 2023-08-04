import React, { useState } from 'react';

const NewStudent = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    course: '',
    batch: '',
    change: `Edit`
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(formData);
    setFormData({
      name: '',
      age: '',
      course: '',
      batch: '',
      change: `Edit`,
    });
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Name"
        onChange={handleFormChange}
        required
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        placeholder="Age"
        onChange={handleFormChange}
        required
      />
      <input
        type="text"
        name="course"
        value={formData.course}
        placeholder="Course"
        onChange={handleFormChange}
        required
      />
      <input
        type="text"
        name="batch"
        value={formData.batch}
        placeholder="Batch"
        onChange={handleFormChange}
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default NewStudent;
