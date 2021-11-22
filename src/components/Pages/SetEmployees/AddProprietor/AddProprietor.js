import React from 'react';
import useAuth from './../../../Hooks/useAuth';

const AddProprietor = () => {
    const { user } = useAuth()
    return (
        <div className="text-center">
            <p>Create a Proprietor Accounts, 1, take Conpany Name, 2, take email/ user current login email, 3, take payments</p>
            <br />
            <form>
                <div className=''>
                    <input className='border-b-2 border-indigo-600 m-2' type='text' name='shopName' placeholder="Enter Your Shop Name" /> <br />
                    <input className='border-b-2 border-indigo-600 m-2' type='text' name='tagLine' placeholder="Enter Your Tagline" /> <br />
                    <input className='border-b-2 border-indigo-600 m-2' type='email' name='email' disabled placeholder={ user.email} /> <br />
                </div>
                <p><u><i>Note: we will use your current login email as admin of the shop</i></u></p> <br/>
                <input className='px-3  rounded-full' type='submit' value="Add Proprietor" />
            </form>
        </div>
    );
};

export default AddProprietor;