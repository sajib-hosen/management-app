import React from 'react';

const Overview = () => {
    const bgStyle = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://theculturetrip.com/wp-content/uploads/2016/10/china-rice-terraces.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // filter: "blur(4px)"
    }
    const date = new Date()
    return (
        <div style={bgStyle} className="flex w-full p-1">
            {/* <p>{date.toString()}</p> */}
            <div  className="w-2/4 p-4">
                <h1 className="text-2xl text-white text-left border-b-2">Overview</h1><br />
                <div className="flex justify-around	">
                    <div className="text-white text-left">
                        <h1>Sales: $67805.87</h1>
                        <h1>In Produbtion: 67549 Pcs</h1>
                        <h1>Order In Hand: 879876 Pcs</h1>
                        <h1>Ready Goods: 879876 Pcs</h1>
                        <h1>Purchase: $5673.87</h1>
                        <h1>Bank: $5673.87</h1>
                        <h1>Ex Cost: $5673.87</h1>
                    </div>
                    <div className="text-white text-left">
                        <h1>Sales: $67805.87</h1>
                        <h1>Production: 67549 Pcs</h1>
                        <h1>Goods Avalable: 879876 Pcs</h1>
                    </div>
                </div>
            </div>

            <div className="w-2/4">
                <img className="p-4" src="https://www.researchgate.net/profile/Marsha-Katz-2/publication/283347029/figure/fig5/AS:391528112508932@1470358984221/Figure-B-2-Cumulative-growth-rate-of-total-health-care-spending-as-a-percent-of-GDP.png" alt="nothway" />
            </div>
            
        </div>
    );
};

export default Overview;