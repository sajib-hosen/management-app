import React, { useEffect} from 'react';
import useAuth from './../../../Hooks/useAuth';

const Invoice = () => {
    const {empData} = useAuth();
    const {adminEmail, email, _id, userToken } = empData;

    const url = `http://localhost:5000/users/${email}/${adminEmail}`
    console.log(url)
    useEffect(()=>{
        fetch(url, { headers:{ 'authorization': `Bearer ${userToken}`}}).then(res => res.json()).then(data => console.log(data))
    }, [])

    console.log(empData, adminEmail)

    return (
        <div>
            <div className='border-2 w-4/5'>
                <div>
                    <h1>{}</h1>
                    <h1>Invoice</h1>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Invoice;