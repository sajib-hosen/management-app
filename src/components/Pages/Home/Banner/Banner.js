import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import useFirebase from './../../../Hooks/useFirebase';

const Banner = () => {
    const { user, logOut, googleSingIn } = useFirebase();

    useEffect(() =>{
        Aos.init({ duration: 2000})
    } ,[])

    const bgStyle = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://errin.eu/sites/default/files/2020-02/Improve%20innovative%20SMEs%20access%20to%20finance.%20Discussing%20the%20new%20SME%20Strategy%20and%20alternative%20financing%20models%20for%20companies%20_2020-02-26_4464.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
    }
    const date = new Date()
    return (
        <div style={bgStyle} className="flex flex-col w-full p-4 text-center">
            <div className='flex justify-end text-white items-center text-right'>
                <button data-aos="fade-right" onClick={ user.email ? logOut : googleSingIn } className=' px-2'> { user.email ? "Log Out" : "Sign In" } </button>
                <p data-aos="fade-up" >{ user.email }</p>
            </div>
           <div className="p-32 text-white text-center mx-auto">
                <h1 data-aos="fade-up" className=" text-4xl">Build You Business On Cloud</h1>
                <p data-aos="fade-up">We will keep your data safe and secure</p>
           </div>
        </div>
    );
};

export default Banner;