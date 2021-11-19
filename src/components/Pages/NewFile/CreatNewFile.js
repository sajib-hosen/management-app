import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

const CreatNewFile = () => {
    return (
        <div>
            <div className="flex justify-between bg-gray-500 text-white">
                <div>
                <ul className="flex">
                    <NavLink to="new-customer" ><li className="truncate py-1 px-2  hover:bg-gray-400 text-white">new customer</li></NavLink>
                    <NavLink to="new-suppliers"><li className="truncate py-1 px-2 hover:bg-gray-400 text-white">new-suppliers</li></NavLink>
                    <NavLink to="new-items"><li className="truncate py-1 px-2 hover:bg-gray-400 text-white">new-items</li></NavLink>
                    </ul>
                </div>
                <div>
                    <p>Search</p>
                </div>
            </div>
            <div>
                <Routes>
                    <Route path="new-customer" element={<p>New Customers</p>} />
                    <Route path="new-suppliers" element={<p>new-suppliers</p>} />
                    <Route path="new-items" element={<p>new-items</p>} />
                </Routes>
            </div>
        </div>
    );
};

export default CreatNewFile;