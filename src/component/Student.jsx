import React, { useContext, useState } from 'react';
import StoreData from './Store';
import './tableData.css';
import NewStudent from './NewStudent';
import EditStudent from './EditStudent';

const Student = () => {
    const data = useContext(StoreData);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(null);

    const handleAddNewStudent = () => {
        setIsAdding(true);
        setIsEditing(null);
    };

    const handleEditStudent = (index) => {
        setIsEditing(index);
        setIsAdding(false);
    };

    const handleAddStudent = (newStudent) => {
        const updatedData = [...data.stname, newStudent];
        data.upStData(updatedData);
        setIsAdding(false);
    };

    const handleEditStudentData = (editedStudent) => {
        const updatedData = data.stname.map((item, index) =>
            index === isEditing ? editedStudent : item
        );
        data.upStData(updatedData);
        setIsEditing(null);
    };

    return (
        <div className="container">
            <div className="main">
                <h2 className="st">Students Details</h2>
                <div className="btn">
                    <button className="add-new-student" onClick={handleAddNewStudent}>
                        Add New Student
                    </button>
                </div>
            </div>
            <div className="form-container">
                {isAdding && <NewStudent onAddStudent={handleAddStudent} />}
                {isEditing !== null && (
                    <EditStudent
                        studentData={data.stname[isEditing]}
                        onEditStudent={handleEditStudentData}
                    />
                )}
            </div>
            {!isAdding && isEditing === null && (
                <table className="students-table" border="1px">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Course</th>
                            <th>Batch</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.stname.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.course}</td>
                                <td>{item.batch}</td>
                                <td className="edit-item" onClick={() => handleEditStudent(index)}>
                                    {item.change}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Student;
