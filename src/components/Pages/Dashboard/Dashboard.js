import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import Home from '../Home/Home';
import Purchase from '../Purchase/Purchase';
import Sales from '../Sales/Sales';
import Navigation from '../Shared/Navigation/Navigation';

const Dashboard = () => {
    const [ navState, setNavState] = React.useState(false); 
    const styleTrue = {
        color: "blue",
        width: "20%",
        transition: "ease-in-out 1.5s"
    }
    const styleTrueBody = {
        marginLeft: "20%",
        width: "80%",
        transition: "ease-in-out 1.5s"
    }
    const styleFlase = {
        color: "red",
        width: "65px",
        transition: "ease-in-out 1.5s"
    }
    const styleFlaseBody = {
        marginLeft: "65px",
        width: "calc(100% - 65px)",
        transition: "ease-in-out 1.5s"
    }
    return (
        <div className="flex flex-col-reverse">
            <BrowserRouter>
                <div style={ navState ? styleTrue : styleFlase } className="border-r-2 h-screen fixed inset-y-0 left-0">
                    <Navigation navState={navState} setNavState={setNavState} />   
                </div>
                <div style={ navState ? styleTrueBody : styleFlaseBody }>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<AboutUs/>} />

                        <Route path="sales" element={<Sales/>} >
                            <Route path="invoice" />
                            <Route path="sales-rec" />
                            <Route path="rec-payment" />
                        </Route>

                        <Route path="purchase" element={<Purchase/>} >
                            <Route path="creat-po" />
                            <Route path="local-purchase" />
                            <Route path="make-payment" />
                        </Route>

                        {/* <Outlet/> */}
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};
 
export default Dashboard;