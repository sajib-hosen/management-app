import React from 'react';

const SalesForTheMonth = () => {
    const salesStyle = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.investopedia.com/thmb/HmCfoE2y04m6IkIg-nlPs7u-jPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1036260966-69379651f54e464385cc2c49d4a884cb.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
    }
    return (
        <div className="flex" style={salesStyle}>
            <div className="w-2/4">
                <img className="p-4" src="https://miro.medium.com/max/700/0*Bj83XdHGcNa81lTR.png" alt="sales report"></img>
            </div>
            <div  className="w-2/4 p-4">
                <h1 className="text-2xl text-white text-left border-b-2">Sales (December-21)</h1><br />
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
        </div>
    );
};

export default SalesForTheMonth;