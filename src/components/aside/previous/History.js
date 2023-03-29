import React, { useState } from 'react';
// import Completed from './Completed';
import Records from './Records';

const History = ({deleted,completed,deleteRecord}) => {
    const [current,setCurrent] = useState('Completed');

    let storageName = '';
    if(current==='Completed')storageName='completes';
    else if(current==='Deleted') storageName='deletes';

    const handleScreenChange = e => {
        // console.log(e.target.classList);
        // e.target.classList.remove('active:scale-90','duration-150');
        // console.log(e.target.classList);
        setCurrent(e.target.innerText);
    }

    
    return (
        <div className='w-full h-[200px]'>
            <div className='w-full h-fit py-2 flex justify-around items-center border-b'>
                <button className='bg-green-500 rounded-md px-5 py-2 text-white font-bold active:scale-90 duration-100' onClick={handleScreenChange} disabled={current==='Completed'}>Completed</button>
                <button className='bg-red-500 rounded-md px-5 py-2 text-white font-bold active:scale-90 duration-100' onClick={handleScreenChange} disabled={current==='Deleted'}>Deleted</button>
            </div>
            <div className='overflow-y-auto h-full m-5'>
                <Records records={current==='Completed'?completed:deleted} storageName={storageName} deleteRecord={deleteRecord}></Records>
            </div>

        </div>
    );
};

export default History;