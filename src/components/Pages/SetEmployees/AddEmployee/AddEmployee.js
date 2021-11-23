import React from 'react';
import { useState } from 'react/cjs/react.development';
import useAuth from './../../../Hooks/useAuth';

const AddEmployee = () => {
    const { user, registerEmployee } = useAuth();
    const [accessArea, setAccessArea] = useState({});
    const [emplyInfo, setEmplyInfo] = useState({});

    const giveAccessTo = e =>{
        const area = e.target.value;
        const value = e.target.checked;
        const newAccessArea = { ...accessArea}
        newAccessArea[area] = value;
        setAccessArea(newAccessArea);
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
        console.log( employee )
        e.target.reset()  // cleare the form
    }

    return (
        <div className='flex'>
            <div className='w-3/5 border-2'>
                <h1 className='text-3xl'>Fill Out The Form</h1> <br/>
                <form onSubmit={ handleAddEmployee }>
                    <div className='flex'>
                        <div className='flex flex-col w-2/4  border-2'>
                            <input onBlur={ empInfo } type='text' name="employeeName" placeholder='Employee Name' />
                            <input onBlur={ empInfo } type='text' name="empDesignation" placeholder='Employee Designation' />
                            <input onBlur={ empInfo } type='text' name="contNumber" placeholder='Contruct Number' />
                            <input onBlur={ empInfo } type='email' name="email" placeholder='Email' /> 
                            <input onBlur={ empInfo } type='password' name="password" placeholder='Password' /> 
                        </div>
                       
                        <div className='w-2/4 border-2'>
                            <input onChange={ giveAccessTo }  type="checkbox" id="sales" name="sales" value="sales" /> <label for="sales"> Sales Tabe</label><br />
                            <input onChange={ giveAccessTo }  type="checkbox" id="purchase" name="purchase" value="purchase" /> <label for="purchase">Purchase Tabe</label><br />
                            <input onChange={ giveAccessTo }  type="checkbox" id="create" name="create" value="create" /> <label for="create">Create Tabe</label><br/>
                            <input onChange={ giveAccessTo }  type="checkbox" id="accounting" name="accounting" value="accounting" /> <label for="accounting">Accounting Tabe</label><br/>
                            <input onChange={ giveAccessTo }  type="checkbox" id="home" name="home" value="home" /> <label for="home">Home</label><br/>
                            <input onChange={ giveAccessTo }  type="checkbox" id="manageEmployee" name="manageEmployee" value="manageEmployee" /> <label for="manageEmployee">Manage Employee</label>
                        </div>
                    </div><br />
                    <input className='px-3 rounded-full' type="submit" value="Add Employee"></input>
                </form>
                <br />
            </div>
            <div className='w-2/5 border-2'>
                <p>Thsi is img</p>
            </div>
        </div>
    );
};

export default AddEmployee;