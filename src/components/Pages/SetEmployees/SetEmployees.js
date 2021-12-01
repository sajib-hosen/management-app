import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import AddEmployee from './AddEmployee/AddEmployee';
import AddProprietor from './AddProprietor/AddProprietor';
import DefaultAdminRoute from './../../PrivateRoute/DefaultAdminRoute';
import AddEmpRoute from './../../PrivateRoute/AddEmpRoute';
import useAuth from './../../Hooks/useAuth';

const SetEmployees = () => {
    const { empData } = useAuth();
    return (
        <div>
            <div className="flex justify-end bg-gray-500 text-white">
                <div>
                    <ul className="flex text-right">
                        <NavLink to="add-employee" ><li className="truncate py-1 px-2  hover:bg-gray-400 text-white">Add Employee</li></NavLink>
                        <NavLink to="list-of-employess"><li className="truncate py-1 px-2 hover:bg-gray-400 text-white">Employees List</li></NavLink>
                        <NavLink to="manage-employee"><li className="truncate py-1 px-2 hover:bg-gray-400 text-white">Manage Employees</li></NavLink>
                        { empData.role === 'defaultAdmin' && <NavLink to="proprietor"><li className="truncate py-1 px-2 hover:bg-gray-400 text-white">Manage Proprietor</li></NavLink> }
                        
                    </ul>
                </div>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={ <p className='border-2'>welcome</p>} />
                    <Route path="add-employee" element={<AddEmpRoute> <AddEmployee/> </AddEmpRoute>} />
                    <Route path="list-of-employess" element={<p className='border-2'>This is list of employees</p>} />
                    <Route path="manage-employee" element={<p className='border-2'>Manage employess</p>} />
                    <Route path="proprietor" element={<DefaultAdminRoute> <AddProprietor /> </DefaultAdminRoute>} />
                </Routes>
            </div>
        </div>
    );
};

export default SetEmployees;