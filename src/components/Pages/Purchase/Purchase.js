import React from 'react';
import { NavLink, Routes, Route, Outlet } from 'react-router-dom';

const Purchase = () => {
    return (
        <div>
            <div className="flex justify-between bg-gray-500 text-white">
                <div>
                <ul className="flex">
                    <NavLink to="create-po" ><li className="truncate py-1 px-2  hover:bg-gray-400 text-white">create-po</li></NavLink>
                    <NavLink to="local-purchase"><li className="truncate py-1 px-2 hover:bg-gray-400 text-white">local-purchase</li></NavLink>
                    <NavLink to="make-payment"><li className="truncate py-1 px-2 hover:bg-gray-400 text-white">Pay Bill</li></NavLink>
                    </ul>
                </div>
                <div>
                    <p>Search</p>
                </div>
            </div>
            <div>
                <Routes>
                    <Route path="create-po" element={<p>creat-po</p>} />
                    <Route path="local-purchase" element={<p>local-purchase</p>} />
                    <Route path="make-payment" element={<p>Pay Bill</p>} />
                    {/* <Outlet/> */}
                </Routes>
            </div>
        </div>
    );
};

export default Purchase;