import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import AddCustomers from './AddCustomers/AddCustomers';

const CreatNewFile = () => {
    return (
        <div>

            <div className="flex justify-end bg-gray-500 text-white">
                <div>
                    <ul className="flex text-right">
                        <NavLink to="new-customer" ><li className="truncate py-1 px-2  hover:bg-gray-400 text-white">new customer</li></NavLink>
                        <NavLink to="new-suppliers"><li className="truncate py-1 px-2 hover:bg-gray-400 text-white">new-suppliers</li></NavLink>
                        <NavLink to="new-items"><li className="truncate py-1 px-2 hover:bg-gray-400 text-white">new-items</li></NavLink>
                        <NavLink to="new-emply"><li className="truncate py-1 px-2 hover:bg-gray-400 text-white">Add Employee</li></NavLink>
                    </ul>
                </div>
            </div>

            <div>
                <Routes>
                    <Route path="new-customer" element={ <AddCustomers /> } />
                    <Route path="new-suppliers" element={<p className='border-2'>new-suppliers</p>} />
                    <Route path="new-items" element={<p className='border-2'>new-items</p>} />
                    <Route path="new-emply" element={<p className='border-2'>Add a new employess</p>} />
                </Routes>
            </div>
            
        </div>
    );
};

export default CreatNewFile;