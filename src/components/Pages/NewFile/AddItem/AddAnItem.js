import React from 'react';

const AddAnItem = () => {

    const handleSubmit = e =>{
        alert('i have nothing to do')
        e.preventDefault()
    }
    return (
        <div className='flex'>

            <form className='border-2 w-4/5' onSubmit={handleSubmit}>
                <h1 className='text-3xl'>Please Fell Out The Item Form</h1>
                <div className='flex' >
                    <fieldset className='flex flex-col w-2/4 p-2 m-2'>
                        <legend className='text-left'> Item Info </legend>
                        <input className='p-2' type='text' name='itemNae' placeholder='Item Name' />
                        <input className='p-2'  type='number' name='avalableQuantity' placeholder='Avalable Quantity' />
                        <input className='p-2'  type='text' name='itemDescription' placeholder='Item Description' />
                    </fieldset>
                    <fieldset  className='flex flex-col w-2/4 p-2 m-2'>
                        <legend className='text-left'>Minimum Quantity Info</legend>
                        <input className='p-2' type='text' name='materialDescription' placeholder='Material Description' />
                        <input className='p-2'  type='number' name='minBalance' placeholder='Minimum Balance Quantity' />
                    </fieldset>
                </div>
                <div className='flex'>
                    <div className='border-2 flex flex-col w-2/4 p-2'>
                        <input className='p-2'  type='number' name='costPerUnit' placeholder='Cost Per Unit' />
                        <input className='p-2'  type='number' name='salesPerUnit' placeholder='Sales Per Unit' />
                    </div>
                    <div className='border-2 flex flex-col w-2/4 p-2'>
                        <input className='p-2'  type='number' name='costPerUnit' placeholder='Balance Quantity' />
                    </div>
                </div>
                <input type='submit' value='Add Item' className='p-2 px-8 rounded-full bg-indigo-700 text-white hover:bg-indigo-500' />
            </form>

            <div className='border-2 w-1/5'>
                <p>item image</p>
            </div>
        </div>
    );
};

export default AddAnItem;