import React, { useState } from 'react';
import Completed from './Completed';
import Deleted from './Deleted';

const History = () => {
    const [current,setCurrent] = useState('Completed');


    const handleScreenChange = e => {
        // console.log(e.target.classList);
        // e.target.classList.remove('active:scale-90','duration-150');
        // console.log(e.target.classList);
        setCurrent(e.target.innerText);
    }

    
    return (
        <div className='h-full'>
            <div className='w-full h-fit py-2 flex justify-around items-center'>
                <button className='bg-green-500 rounded-md px-5 py-2 text-white font-bold active:scale-90 duration-100' onClick={handleScreenChange} disabled={current==='Completed'}>Completed</button>
                <button className='bg-red-500 rounded-md px-5 py-2 text-white font-bold active:scale-90 duration-100' onClick={handleScreenChange} disabled={current==='Deleted'}>Deleted</button>
            </div>
            <div>
                {current==='Completed' && <Completed></Completed>}
                {current==='Deleted' && <Deleted></Deleted>}
            </div>

        </div>
    );
};

export default History;