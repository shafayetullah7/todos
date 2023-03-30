import React, { useState } from 'react';
// import Completed from './Completed';
import Records from './Records';

const History = ({deleted,completed,deleteRecord}) => {
    const [current,setCurrent] = useState('Completed');

    let storageName = '';
    if(current==='Completed')storageName='completes';
    else if(current==='Deleted') storageName='deletes';


    const handleScreenChange = e => {
        setCurrent(e.target.innerText);
    }

    
    return (
        <div className='w-full h-[200px]'>
            <div className='w-full h-fit py-2 flex justify-around items-center border-b'>
                <button className={`rounded-md px-5 py-2 text-white font-bold ${current!=='Completed'?'active:scale-90 duration-100 bg-green-500':'bg-green-300'}`} onClick={handleScreenChange} disabled={current==='Completed'}>Completed</button>
                <button className={`rounded-md px-5 py-2 text-white font-bold  ${current!=='Deleted'?'active:scale-90 duration-100 bg-red-500':'bg-red-300'}`} onClick={handleScreenChange} disabled={current==='Deleted'}>Deleted</button>
            </div>
            <div className='overflow-y-auto h-full m-5'>
                <Records records={current==='Completed'?completed:deleted} storageName={storageName} deleteRecord={deleteRecord}></Records>
            </div>

        </div>
    );
};

export default History;