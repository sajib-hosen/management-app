import React from 'react';
import { NavLink, Routes, Route, Outlet } from 'react-router-dom';
// import SalesNav from './SalesNav/SalesNav';

const Sales = () => {
    // const match = useRouteMatch();
    return (
        <div>
            <div className="flex justify-between border-2">
                <div>
                    <NavLink to="invoice">Creat Invoice</NavLink>
                    <NavLink to="sales-rec">Sales Receipt</NavLink>
                    <NavLink to="rec-payment">Receive Payment</NavLink>
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