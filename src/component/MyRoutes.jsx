import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Student from './Student';
import Contect from './Contect';
import StoreData from './Store';
import './formStyles.css'

const MyRoutes = () => {
    const [studentData, setStudentData] = useState([
        { id: 1, name: 'Ajay', age: 22, course: 'MERN', batch: 'EA23', change: `Edit` },
        { id: 2, name: 'Jay', age: 23, course: 'MEAN', batch: 'EA23', change: `Edit` },
        { id: 3, name: 'Vijay', age: 21, course: 'Java', batch: 'EA23', change: `Edit` },
        { id: 4, name: 'Raj', age: 25, course: 'AI & ML', batch: 'EA23', change: `Edit` },
    ]);
    return (
        <div className="MyRoutesComponent">
            <div className="nav-content">
                <NavLink className="items" to='/'>Home</NavLink>
                <NavLink className="items" to='/Student'>Student</NavLink>
                <NavLink className="items" to='/Contect'>Contect</NavLink>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Student' element={
                    <StoreData.Provider value={{ stname: studentData, upStData: setStudentData }}>
                        <Student />
                    </StoreData.Provider>
                } />
                <Route path='/Contect' element={<Contect />} />
            </Routes>
        </div>
    );
};

export default MyRoutes;
