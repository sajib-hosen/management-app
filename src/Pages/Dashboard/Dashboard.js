import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import Home from '../Home/Home';
import Navigation from '../Shared/Navigation/Navigation';

const Dashboard = () => {

    const [ navState, setNavState] = React.useState(true);

    const styleTrue = {
        color: "blue",
        width: "20%"
    }

    const styleFlase = {
        color: "red",
        width: "55px"
    }

    return (
        <div className="flex">
            
            <BrowserRouter>
                <div style={ navState ? styleTrue : styleFlase } className="border-2 h-screen">
                    <Navigation navState={navState} setNavState={setNavState} />   
                </div>
                <div>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<AboutUs/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};
 
export default Dashboard;