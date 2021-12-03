import React, { useState } from 'react';
import useAuth from './../../../Hooks/useAuth';

const AddCustomers = () => {
    const {orgData} = useAuth();
    const [ customerData, setCustomerData ] = useState({cusOf: `${orgData.email}`});

    const collectCusData = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newCusData = { ...customerData }
        newCusData[field] = value;
        setCustomerData(newCusData);
    }

    const handleAddCustomer = e =>{
        console.log( customerData )

        //send the data to DB ==>>
        fetch('http://localhost:5000/customers', {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify( customerData )
        })
        .then( res => res.json())
        .then( data => {
            if(data.insertedId){
                alert('Customer added in DB success')
            }
        })

        e.preventDefault()
    }
    return (
        <div className='flex'>

            <div className='border-2 h-screen w-1/5'>
                <p>This is list of customers</p>
            </div>

            <div className=' w-4/5'>
                <h1 className='text-3xl text-left px-4'>Add a customer</h1>
                <div>
                    <form onSubmit={ handleAddCustomer }>
                        <div className='py-2'>
                            <div className='flex px-2 '>
                                <div className='flex flex-col w-2/4 mx-1 px-2'>
                                    <input onChange={ collectCusData } className='p-1 border-b-2 border-indigo-700 my-2' type='text' name='customerName' placeholder='Enter customer name . . .' />
                                    <textarea onChange={ collectCusData }  className='p-1 border-b-2 border-indigo-700 my-2' rows="4" cols="50" name="address" placeholder='Enter Customer Address . . .' />
                                </div>
                                <div className='flex flex-col w-2/4 mx-1 px-2'>
                                    <input onChange={ collectCusData }  className='p-1 border-b-2 border-indigo-700 my-2' type='text' name='contructPerson' placeholder='Contruct Person . . .' />
                                    <input onChange={ collectCusData }  className='p-1 border-b-2 border-indigo-700 my-2' type='text' name='contructNumber' placeholder='Contruct Number . . .' />
                                    <input onChange={ collectCusData }  className='p-1 border-b-2 border-indigo-700 my-2' type='email' name='contrucEmail' placeholder='Email . . .' />
                                </div>
                            </div><br/>
                            <input className='px-3 bg-indigo-700 text-white rounded-full' type="submit" value="Add Customer" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddCustomers;