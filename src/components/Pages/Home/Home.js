import React from 'react';
import Banner from './Banner/Banner';
import Overview from './Overview/Overview';
import SalesForTheMonth from './SaleForTheMonth/SalesForTheMonth';

const Home = () => {
    return (
        <div>
            <Banner/><br/>
            <div className="container mx-auto px-8" >
                <h1 className="text-2xl text-left">Overview</h1>
                <Overview/><br/>
                <h1 className="text-2xl text-left">Sales for the month of (December-21)</h1>
                <SalesForTheMonth/>
                <br/>
            </div>


        </div>
    );
};

export default Home;