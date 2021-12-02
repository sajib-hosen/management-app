import React, { useState} from 'react';
import useAuth from './../../../Hooks/useAuth';

const AddEmployee = () => {
    const { user, registerEmployee, empData } = useAuth();
    const [accessArea, setAccessArea] = useState({});
    const [emplyInfo, setEmplyInfo] = useState({});
    const [ gender, setGender] = useState('')

    console.log(empData)
    
    const giveAccessTo = e =>{
        const area = e.target.value;
        const value = e.target.checked;
        const newAccessArea = { ...accessArea}
        newAccessArea[area] = value;
        setAccessArea(newAccessArea);
    }

    const handleRadio = e =>{
        const loginSys = e.target.value;
        setGender(loginSys)
    } 

    const empInfo = e =>{
        const nameField = e.target.name;
        const fieldValue = e.target.value;
        const newEmplyInfo = { ...emplyInfo};
        newEmplyInfo[nameField] = fieldValue;
        setEmplyInfo(newEmplyInfo)
    }
    const adminEmail = user.email;
    // console.log(user.email, accessArea, emplyInfo )

    const handleAddEmployee = e =>{
        e.preventDefault();
        const employee = { ...emplyInfo, role:'employee', adminEmail, accessArea }
        registerEmployee( employee )
        // console.log( employee )
        e.target.reset()  // cleare the form
    }

    return (
        <div className='flex'>
            <div className='w-3/5 p-2 border-2 flex-shrink-0'>
                <h1 className='text-3xl text-left'>Employee Form</h1> <br />
                <form onSubmit={ handleAddEmployee }>
                    <div className='flex'>
                        <div className='flex flex-col w-2/4  border-r-2'>

                            <div className='flex flex-col'>
                                <h1 className='text-left text-xl'>Personal info</h1>
                                <input className='py-2 px-1 mx-2 border-b-2 border-indigo-300' onBlur={ empInfo } type='text' name="employeeName" placeholder='Employee Name' required />
                                <input className='py-2 px-1 mx-2 border-b-2 border-indigo-300' onBlur={ empInfo } type='text' name="empDesignation" placeholder='Employee NID' required />
                                <input className='py-2 px-1 mx-2 border-b-2 border-indigo-300' onBlur={ empInfo } type='text' name="contNumber" placeholder='Contruct Number' required />
                                <input className='py-2 px-1 mx-2 border-b-2 border-indigo-300' onBlur={ empInfo } type='text' name="education" placeholder='Education Qualification' required />
                                <textarea className='py-2 px-1 mx-2 border-b-2 border-indigo-300' onBlur={ empInfo } cols='4' rows='3' name="address" placeholder='Current address' />
                                <input className='py-2 px-1 mx-2' type='file'name='empImg' />

                                <div className='flex mt-2' onChange = { handleRadio }>
                                    <div className="px-2 flex items-center">
                                        <input id="male" type="radio" name="c1" value="male" /> <label className='px-2' htmlFor ="male">Male</label>
                                    </div>
                                    <div className="px-2 flex items-center">
                                        <input id="female" type="radio" name="c1" value="female" /> <label className='px-2' htmlFor ="female">Female</label>
                                    </div>
                                    <div className="px-2 flex items-center">
                                        <input id="others" type="radio" name="c1" value="others" /> <label className='px-2' htmlFor ="others">Others</label>
                                    </div>
                                </div> 
                            </div><br />

                        </div>
                       
                        <div className='w-2/4 text-left pt-4 p-2'>
                        <div className='flex flex-col'>
                        <h1 className='text-left text-xl'>Employement info</h1>
                                <input className='py-2 px-1 mx-2 border-b-2 border-indigo-300' onBlur={ empInfo } type='text' name="designation" placeholder='Employee Designation' required /> 
                                <input className='py-2 px-1 mx-2 border-b-2 border-indigo-300' onBlur={ empInfo } type='number' name="salary" placeholder='Monthly Salary: $' required /> 
                                <input className='py-2 px-1 mx-2 border-b-2 border-indigo-300' onBlur={ empInfo } type='date' name="joiningDate" required /> 
                            </div> <br/>

                            <div>
                                <h1 className='text-left text-xl'>Access area</h1>
                                <div className='mx-4 flex justify-around'>
                                    <div>
                                        <input onChange={ giveAccessTo }  type="checkbox" id="home" name="home" value="home" /> <label for="home">Home</label><br/>
                                        <input onChange={ giveAccessTo }  type="checkbox" id="sales" name="sales" value="sales" /> <label for="sales"> Sales Tabe</label><br />
                                        <input onChange={ giveAccessTo }  type="checkbox" id="purchase" name="purchase" value="purchase" /> <label for="purchase">Purchase Tabe</label><br />
                                    </div>
                                    <div>
                                        <input onChange={ giveAccessTo }  type="checkbox" id="create" name="create" value="create" /> <label for="create">Create Tabe</label><br/>
                                        <input onChange={ giveAccessTo }  type="checkbox" id="accounting" name="accounting" value="accounting" /> <label for="accounting">Accounting Tabe</label><br/>
                                        <input onChange={ giveAccessTo }  type="checkbox" id="manageEmployee" name="manageEmployee" value="manageEmployee" /> <label for="manageEmployee">Manage Employee</label>
                                    </div>
                                </div>
                            </div> <br />

                            <div className='flex flex-col'>
                                <h1 className='text-left text-xl'>Login info</h1>
                                <input className='py-2 px-1 mx-2 border-b-2 border-indigo-300' onBlur={ empInfo } type='email' name="email" placeholder='Email' required /> 
                                <input className='py-2 px-1 mx-2 border-b-2 border-indigo-300' onBlur={ empInfo } type='password' name="password" placeholder='Password' required /> 
                            </div>
                            
                        </div>
                    </div><br />
                    <input className='px-3 rounded-full bg-indigo-600 text-white' type="submit" value="Add Employee"></input>
                </form>
                <br />
            </div>
            <div style={{ backgroundImage: `url(https://cdn.dribbble.com/users/1568450/screenshots/5436466/work_3_dribbble-01.png)`}} className='w-2/5 border-2'>
                <img src='https://cdn.dribbble.com/users/1568450/screenshots/5436466/work_3_dribbble-01.png' alt='______' />
            </div>
        </div>
    );
};

export default AddEmployee;