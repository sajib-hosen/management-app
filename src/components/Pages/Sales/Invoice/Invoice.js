import React, { useEffect, useState} from 'react';
import useAuth from './../../../Hooks/useAuth';

const Invoice = () => {
    const {empData, userToken} = useAuth();
    const [ orgData, setOrgData ] = useState({});
    let { adminEmail, email  } = empData;
    const { orgName, tagline} = orgData;

    if(!adminEmail){
        adminEmail = email;
    }
    const url = `http://localhost:5000/users/${email}/${adminEmail}`;
    useEffect(()=>{
        fetch(url, { headers:{ 'authorization': `Bearer ${userToken}`}})
        .then(res => res.json())
        .then(data => setOrgData( data ))
    }, [])

    return (
        <div>
            {/* ===================== */}
            <div className='flex justify-between border-2 w-4/5'>
                <div className='pl-4'>
                    <h1 className='text-2xl text-left'>{orgName}</h1>
                    <p className='text-left'>{tagline}</p>
                </div>
                <div>
                    <h1 className='text-4xl pr-4'>Invoice</h1>
                </div>
            </div>
            {/* ==================== */}
            <div>

            </div>
        </div>
    );
};

export default Invoice;