import React, { useEffect, useRef, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import useAuth from './../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const Login = () => {
    const [isNew, setIsNew] = useState();
    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();
    const { googleSingIn, logInWithEmail, registerUser, isLoading, error, user } = useAuth()
    
    console.log(user)
    useEffect(() =>{
        Aos.init({ duration: 2000})
    } ,[])

    const checkedVlaue = e =>{
        setIsNew(e.target.checked);
    }

    const registerNewUser = e =>{
        const userName = nameRef.current.value;
        const userEmail = emailRef.current.value;
        const userPass = passRef.current.value;
        console.log(userName, userPass, userEmail)
        registerUser( userEmail, userPass, userName) 
        if( user.email ){
            nameRef.current.value='';
            emailRef.current.value='';
            passRef.current.value='';
        }
        e.preventDefault();
    }

    const loginUser = e =>{
        const userEmail = emailRef.current.value;
        const userPass = passRef.current.value;
        logInWithEmail( userEmail, userPass, location, navigate );
        if( user.email ){
            emailRef.current.value='';
            passRef.current.value='';
        }
        e.preventDefault();
    }

    const SigninWithGoogle = () =>{
        googleSingIn( location, navigate)
    }
    return (
        <div className="flex" >
            <div className="border-2 h-screen w-80 flex flex-col justify-items-center" >
                <div className=' my-auto' >
                    <div data-aos="fade-down" onClick={SigninWithGoogle} className="p-2 m-3 rounded-full border-2">Sign In with Google</div>
                    
                    <form onSubmit={ isNew? registerNewUser : loginUser }className='flex flex-col items-center p-2' >
                        {
                            isNew &&  <input ref={nameRef}  data-aos="fade-up" className='border-b-2 w-full py-2 my-2' type='name' name='name' placeholder='Your Name . . .' />
                        }
                        <input data-aos="fade-up" ref={emailRef} className='border-b-2 w-full py-2 my-2' type='email' name='email' placeholder='Your Email . . .' />
                        <input data-aos="fade-up" ref={passRef}  className='border-b-2 w-full py-2 my-2' type='password' name='password' placeholder='Your Password . . .' />
                        <p data-aos="fade-up">New User? <input onClick={ checkedVlaue } type="checkbox" name="vehicle1" /> </p>
                        <input data-aos="fade-up" className='w-full py-2 my-3 rounded-full' type='submit' value={isNew ? "Sign Up" : "Sing In"} />
                    </form>
                    
                </div>
            </div>

            <div className="border-2 w-full flex justify-center items-center" style={{ backgroundImage: "url('https://i.pinimg.com/originals/77/75/5e/77755e565ef7ddbff2546231cd8732bf.png')", backgroundSize: 'cover', backgroundPosition: 'center'}} >
                <div>
                    <h1 className='text-5xl' data-aos="zoom-out" >
                        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                        </svg>Welcome Back</h1>
                    <p data-aos="fade-up" >Please login to serve you better</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;