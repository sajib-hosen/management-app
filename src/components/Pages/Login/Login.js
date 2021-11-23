import React, { useEffect, useRef, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import useAuth from './../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const Login = () => {

    useEffect(() =>{
        Aos.init({ duration: 2000})
    } ,[])

    const { googleSingIn, logInWithEmail, registerUser, isLoading, error, user } = useAuth()

    const orgRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const userRef = useRef();
    const taglineRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();
    const [ logInType, setLogInType] = useState('propritorLogin')
    
    console.log(user)

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

    // const SigninWithGoogle = () =>{
    //     googleSingIn( location, navigate)
    // }

    
    const handleRadio = e =>{
        const loginSys = e.target.value;
        setLogInType(loginSys)
    }

    const registerNew = e =>{
        e.preventDefault();
        const orgName = orgRef.current.value;
        const userName = userRef.current.value;
        const tagLine = taglineRef.current.value;
        const userEmail = emailRef.current.value;
        const userPass = passRef.current.value;

        console.log(orgName, userPass, userEmail, tagLine, userName )

        registerUser(userEmail, userPass, orgName,  tagLine, userName) 
        if( user.email ){
            orgRef.current.value='';
            userRef.current.value='';
            emailRef.current.value='';
            passRef.current.value='';
            taglineRef.current.value='';
        }
        
    }

    const propritorLogin = e =>{
        e.preventDefault();
        const userEmail = emailRef.current.value;
        const userPass = passRef.current.value;
        logInWithEmail( userEmail, userPass, location, navigate );
        alert(' from properitor login')
        if( user.email ){
            emailRef.current.value='';
            passRef.current.value='';
        }
    }

    const employeeLogin = e =>{
        e.preventDefault();
        alert('has to create function in login pagr and in useFirebase for employee login ')
    }

    return (
        <div className="flex" >
            <div className="border-2 h-screen w-2/5 flex flex-col justify-items-center" >
                <div className=' my-auto' >
                    <form onSubmit={ logInType==="propritorLogin" && propritorLogin || logInType==="employeeLogin" && employeeLogin || logInType==="register" && registerNew }className='flex flex-col items-center p-2' >
                        {
                            logInType==="register" &&  <input ref={orgRef}  data-aos="fade-up" className='border-b-2 w-full py-2 my-2' type='name' name='name' placeholder='Organization Name' />
                        }
                        {
                            logInType==="register" &&  <input ref={taglineRef}  data-aos="fade-up" className='border-b-2 w-full py-2 my-2' type='name' name='tagline' placeholder='Tagline' />
                        }
                        {
                            logInType==="register" &&  <input ref={userRef}  data-aos="fade-up" className='border-b-2 w-full py-2 my-2' type='name' name='tagline' placeholder='User Name' />
                        }
                        <input data-aos="fade-up" ref={emailRef} className='border-b-2 w-full py-2 my-2' type={logInType==="employeeLogin" ? "text" : "email"} name='email' placeholder={logInType==="propritorLogin" && "Propritor Email" || logInType==="employeeLogin" && "Employee ID" || logInType==="register" && "Enter Email"} />
                        <input data-aos="fade-up" ref={passRef}  className='border-b-2 w-full py-2 my-2' type='password' name='password' placeholder='Your Password' />
                        
                        <div className='flex' data-aos="fade-up" onChange = { handleRadio }>
                            <div className="px-2 flex">
                                <label htmlFor ="propritorLogin">Propritor Login</label>
                                <input id="propritorLogin" type="radio" name="c1" value="propritorLogin" />
                            </div>
                            <div className="px-2 flex">
                                <label htmlFor ="employeeLogin">Employee Login</label>
                                <input id="employeeLogin" type="radio" name="c1" value="employeeLogin" />
                            </div>
                            <div className="px-2 flex">
                                <label htmlFor ="register">Register</label>
                                <input id="register" type="radio" name="c1" value="register" />
                            </div>
                            
                        </div>  
                        <input data-aos="fade-left" className='w-full py-2 my-3 rounded-full' type='submit' value={ logInType==="propritorLogin" && "Propritor Login" || logInType==="employeeLogin" && "Employee Login" || logInType==="register" && "Register Now" } />
                    </form>
                    
                </div>
            </div>

            <div className="border-2 w-full flex justify-center items-center" style={{ backgroundImage: "url('https://i.pinimg.com/originals/77/75/5e/77755e565ef7ddbff2546231cd8732bf.png')", backgroundSize: 'cover', backgroundPosition: 'center'}} >
                <div>
                    <h1 className='text-4xl' data-aos="zoom-out" >Welcome To Management App</h1>
                    <p data-aos="fade-up" >Please login to serve you better</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;