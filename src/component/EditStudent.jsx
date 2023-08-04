import React, { useState } from 'react';

const EditStudent = ({ studentData, onEditStudent }) => {
  const [formData, setFormData] = useState(studentData);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditStudent(formData);
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
      <button type="submit">Edit Student</button>
    </form>
  );
};

export default EditStudent;
