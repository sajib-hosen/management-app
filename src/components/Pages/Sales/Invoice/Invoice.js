import React, { useEffect, useState} from 'react';
import useAuth from './../../../Hooks/useAuth';

const Invoice = () => {
    const { orgData, customers} = useAuth();
    const { orgName, tagline} = orgData;
    const [customerName, setCustomerName] = useState("");
    const [selectedCus, setSelectedCus] = useState([]);
    const [loopCount, setLoopCount] = useState(true)

    // console.log(customers)
    const handleChange = (event) => {
        setCustomerName(event.target.value);
        setLoopCount(true);
      }

      if(customerName !== '' && loopCount){
         const selectedCustomer = customers.filter(customer => customer.customerName === customerName);
         setSelectedCus(selectedCustomer);
         setLoopCount(false);
      }
      else if(customerName === '' && loopCount){
        setSelectedCus([]);
        setLoopCount(false);
      }
      console.log( 'current cust', customerName, 'selected one', selectedCus )

    return (
        <div>
            <div className='border-2 w-4/5'>
                {/* Ord data ===================== */}
                <div className='flex justify-between '>
                    <div className='pl-4'>
                        <h1 className='text-2xl text-left'>{orgName}</h1>
                        <p className='text-left'>{tagline}</p>
                    </div>
                    <div>
                        <h1 className='text-4xl pr-4'>Invoice</h1>
                    </div>
                </div>
                {/* cus data ==================== */}
                <div className='border-2'>
                <form>
                    <div className='flex flex-col'>
                        <select className='border-b-2 border-black' value={customerName} onChange={handleChange}>
                            <option value="">Select customer</option>
                            { customers.map(customer => <option value={customer.customerName} key={customer._id}>{customer.customerName}</option> )}
                        </select>
                        <textarea className='border-b-2 border-black' cols='10' rows='5' value={selectedCus[0]?.address} disabled />
                    </div>
                </form>

                </div>
            </div>
        </div>
    );
};

export default Invoice;