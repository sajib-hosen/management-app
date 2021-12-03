import React from 'react';
import './App.css';
import Home from './components/Pages/Home/Home';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import Sales from './components/Pages/Sales/Sales';
import Purchase from './components/Pages/Purchase/Purchase';
import Navigation from '../src/components/Shared/Navigation/Navigation'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatNewFile from './components/Pages/NewFile/CreatNewFile';
import Login from './components/Pages/Login/Login';
import AuthProvider from './components/context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SetEmployees from './components/Pages/SetEmployees/SetEmployees';
import SalesRoute from './components/PrivateRoute/SalesRoute';
import PurchaseRoute from './components/PrivateRoute/PurchaseRoute';
import CreateNewRoute from './components/PrivateRoute/CreateNewRoute';
import ManageEmployeeRoute from './components/PrivateRoute/ManageEmployeeRoute';

function App() {
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
    <AuthProvider>
        <div  className="flex flex-col-reverse text-center">
            <BrowserRouter>
                <div style={ navState ? styleTrue : styleFlase } className="border-r-2 h-screen fixed inset-y-0 left-0">
                    <Navigation navState={navState} setNavState={setNavState} />   
                </div>
                <div style={ navState ? styleTrueBody : styleFlaseBody }>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />

                        <Route path="sales" element={<SalesRoute> <Sales /> </SalesRoute> } >
                            <Route path="invoice" />
                            <Route path="sales-rec" />
                            <Route path="rec-payment" />
                        </Route>

                        <Route path="purchase" element={ <PurchaseRoute> <Purchase/> </PurchaseRoute>} >
                            <Route path="create-po" />
                            <Route path="local-purchase" />
                            <Route path="make-payment" />
                        </Route>

                        <Route path="create-file" element={<CreateNewRoute> <CreatNewFile/> </CreateNewRoute>} >
                            <Route path="new-customer" />
                            <Route path="new-suppliers" />
                            <Route path="new-items" />
                            <Route path="new-emply" />
                        </Route>

                        <Route path="emp-settings" element={<ManageEmployeeRoute> <SetEmployees/> </ManageEmployeeRoute> } > {/* Admin Route */}
                            <Route path="add-employee" />
                            <Route path="list-of-employess" />
                            <Route path="manage-employee" />
                            <Route path="proprietor" />
                        </Route>

                        <Route path="about" element={ <PrivateRoute> <AboutUs/> </PrivateRoute> } />

                        <Route path='login' element={ <Login/> } />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    </AuthProvider>
  );
}

export default App;
