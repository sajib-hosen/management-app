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
        <>
            <div className=' w-4/5'>
                <div className=''>
                    <form className='px-4'>

                        {/* Organization Info ===================== */}
                        <div className='flex justify-between border-b-4 border-indigo-400 '>
                            <div className=''>
                                <h1 className='text-2xl text-left'>{orgName}</h1>
                                <p className='text-left'>{tagline}</p>
                            </div>
                            <div>
                                <h1 className='text-4xl pr-4'>Invoice</h1>
                            </div>
                        </div> <br />

                        {/* Customer Info ================= */}
                        <div className='flex flex-row'>
                            <div className='w-2/6 flex flex-col'>
                                <select className='border-2' value={customerName} onChange={handleChange}>
                                    <option value="">Select customer</option>
                                    { customers.map(customer => <option value={customer.customerName} key={customer._id}>{customer.customerName}</option> )}
                                </select>
                                <textarea className='border-2' cols='5' rows='3' value={selectedCus[0]?.address} disabled />
                            </div>
                            <div className='w-2/6 flex flex-col'>
                                <textarea className='border-2' cols='5' rows='4' placeholder='Shipping address (if other then PI address)' />
                            </div>
                            <div className='w-2/6 flex flex-col justify-end text-right'>
                                <h1>Value: <span className='text-2xl'>$ 29820.50</span></h1>
                                <h1>Invoice No: <span className='text-1xl'>FGH44567</span></h1>
                                <h1><input className='w-2/4' type='date' /></h1>
                            </div>
                        </div><br />

                        <div className='border-2'>
                            <table>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th> 
                                    <th>Age</th>
                                </tr>
                                <tr>
                                    <td>Jill</td>
                                    <td>Smith</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>Jill</td>
                                    <td>Smith</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>Eve</td>
                                    <td>Jackson</td>
                                    <td>94</td>
                                </tr>
                                <tr>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>80</td>
                                </tr>
                            </table>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Invoice;