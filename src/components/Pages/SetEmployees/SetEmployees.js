import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import AddEmployee from './AddEmployee/AddEmployee';
import AddProprietor from './AddProprietor/AddProprietor';

const SetEmployees = () => {
    return (
        <div>
            <div className="flex justify-end bg-gray-500 text-white">
                <div>
                    <ul className="flex text-right">
                        <NavLink to="add-employee" ><li className="truncate py-1 px-2  hover:bg-gray-400 text-white">Add Employee</li></NavLink>
                        <NavLink to="list-of-employess"><li className="truncate py-1 px-2 hover:bg-gray-400 text-white">Employees List</li></NavLink>
                        <NavLink to="manage-employee"><li className="truncate py-1 px-2 hover:bg-gray-400 text-white">Manage Employees</li></NavLink>
                        <NavLink to="proprietor"><li className="truncate py-1 px-2 hover:bg-gray-400 text-white">Manage Proprietor</li></NavLink> {/* defaultAdmin Route */}
                    </ul>
                </div>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={ <p className='border-2'>welcome</p>} />
                    <Route path="add-employee" element={ <AddEmployee/> } />
                    <Route path="list-of-employess" element={<p className='border-2'>This is list of employees</p>} />
                    <Route path="manage-employee" element={<p className='border-2'>Manage employess</p>} />
                    <Route path="proprietor" element={ <AddProprietor /> } />
                </Routes>
            </div>
        </div>
    );
};

export default SetEmployees;