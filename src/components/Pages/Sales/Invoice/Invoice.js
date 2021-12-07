import React, { useEffect, useState} from 'react';
import useAuth from './../../../Hooks/useAuth';

const Invoice = () => {
    const { orgData, customers} = useAuth();
    const { orgName, tagline} = orgData;
    const [customerName, setCustomerName] = useState("");
    const [selectedCus, setSelectedCus] = useState([]);
    const [loopCount, setLoopCount] = useState(true)
    const [display, setDisplay] = useState({ 0:true, 1:false, 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false, 10:false, 11:false, 12:false, 13:false, 14:false, 15:false, 16:false, 17:false, 18:false, 19:false, 20:false, 21:false, 22:false, 23:false, 24:false, 25:false, 26:false, 17:false, 28:false, 29:false});
    const [displayBtn, setDisplayBtn] = useState(1);
   
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

    //Max table row ===========================
    let tableMaxRow = [];
    for( let i = 0; i <= 29; i++){
        tableMaxRow.push(i);
    }

    const classActive ='inline';
    const classHide ='hidden'

    const showAddRow = e =>{
        e.target.className = 'table border-2 bg-indigo-500';
        const targatedId = e.target.id;
        setDisplayBtn(Number(targatedId) + 1);
        display[targatedId] = true;
        const newDisplayKeys= {...display};
        newDisplayKeys[targatedId] = true;
        setDisplay(newDisplayKeys);
        e.preventDefault();
    }

    console.log('Btn ID', displayBtn )

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
                            <div><h1 className='text-4xl pr-4'>Invoice</h1></div>
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
                        {/* create a row on clicke=================================== */}
                        <div className=''>
                            <table className='w-full'>
                                <tr className='w-full border-2 border-indigo-600'>
                                    <th>Serial</th>
                                    <th>Item</th>
                                    <th>Product Description</th> 
                                    <th>Quantity</th>
                                    <th>Unit</th>
                                    <th>Unit Price</th>
                                    <th>Total Value</th>
                                </tr>

                                { tableMaxRow.map(tableRow =>((<> 
                                    {display[tableRow] ? <tr className=''>
                                        <td>{tableRow+1}</td>
                                        <td>
                                            <select>
                                                <option value="">Select Item</option>
                                            </select>
                                        </td>
                                        <td>T-shart for woman</td>
                                        <td>1200</td>
                                        <td>Pcs</td>
                                        <td>$ 03.00</td>
                                        <td>$ 3600.00</td>
                                        </tr> : <button key={tableRow} id={tableRow} onClick={showAddRow} className={`table ${tableRow === displayBtn ? classActive : classHide }`}>Add Row</button> }
                                </>)))}
                            </table>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Invoice;
