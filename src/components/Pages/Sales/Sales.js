import React from 'react';
import { NavLink, Routes, Route, Outlet } from 'react-router-dom';
// import SalesNav from './SalesNav/SalesNav';

const Sales = () => {
    // const match = useRouteMatch();
    return (
        <div>
            <div className="flex justify-between bg-gray-500 text-white">
                <div>
                    <ul className="flex">
                    <NavLink to="invoice" ><li className="truncate py-1 px-2  hover:bg-gray-400 text-white">Creat Invoice</li></NavLink>
                    <NavLink to="sales-rec"><li className="truncate py-1 px-2 hover:bg-gray-400 text-white">Sales Receipt</li></NavLink>
                    <NavLink to="rec-payment"><li className="truncate py-1 px-2 hover:bg-gray-400 text-white">Receive Payment</li></NavLink>
                    </ul>
                </div>
                <div>
                    <p>Search</p>
                </div>
            </div>
            <div>
                <Routes>
                    <Route path="invoice" element={<p>invoice</p>} />
                    <Route path="sales-rec" element={<p>Sales Receipt</p>} />
                    <Route path="rec-payment" element={<p>Receive Payment</p>} />
                    <Outlet/>
                </Routes>
            </div>
        </div>
    );
};

// https://www.youtube.com/watch?v=F5eDWtJRYaI

export default Sales;