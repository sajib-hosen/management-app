import React from 'react';

const Banner = () => {
    const bgStyle = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://errin.eu/sites/default/files/2020-02/Improve%20innovative%20SMEs%20access%20to%20finance.%20Discussing%20the%20new%20SME%20Strategy%20and%20alternative%20financing%20models%20for%20companies%20_2020-02-26_4464.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        // filter: "blur(4px)"
    }
    const date = new Date()
    return (
        <div style={bgStyle} className="flex w-full p-4 text-center">
           <h1 className="p-40 text-white text-center mx-auto text-4xl">Build You Business On Cloud</h1>
        </div>
    );
};

export default Banner;