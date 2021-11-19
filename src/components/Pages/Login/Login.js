import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Login = () => {
    const [isChecked, setIsChecked] = useState();

    useEffect(() =>{
        Aos.init({ duration: 2000})
    } ,[])

    const checkedVlaue = e =>{
        setIsChecked(e.target.checked);
    }

    const handleOnSubmit = e =>{
        e.preventDefault();
    }
    return (
        <div className="flex" >
            <div className="border-2 h-screen w-80 flex flex-col justify-items-center" >
                <div className=' my-auto' >
                    <form onSubmit={ handleOnSubmit }className='flex flex-col items-center p-2' >
                        {
                            isChecked &&  <input data-aos="fade-up" className='border-b-2 w-full py-2 my-2' type='name' name='name' placeholder='Your Name . . .' />
                        }
                        <input data-aos="fade-up" className='border-b-2 w-full py-2 my-2' type='email' name='email' placeholder='Your Email . . .' />
                        <input data-aos="fade-up" className='border-b-2 w-full py-2 my-2' type='password' name='password' placeholder='Your Password . . .' />
                        <p data-aos="fade-up">New User? <input onClick={ checkedVlaue } type="checkbox" name="vehicle1" /> </p>
                        <input data-aos="fade-up" className='w-full py-2 my-3 rounded-full' type='submit' value={isChecked ? "Sign Up" : "Sing In"} />
                    </form>
                    
                </div>
            </div>

            <div className="border-2 w-full flex justify-center items-center" style={{ backgroundImage: "url('https://i.pinimg.com/originals/77/75/5e/77755e565ef7ddbff2546231cd8732bf.png')", backgroundSize: 'cover', backgroundPosition: 'center'}} >
                <div>
                    <h1 className='text-5xl' data-aos="zoom-out" >Welcome Back</h1>
                    <p data-aos="fade-up" >Please login to serve you better</p>
                </div>
            </div>
        </div>
    );
};

export default Login;