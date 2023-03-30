import React from 'react';

import { AiFillDelete } from "react-icons/ai";

const Record = ({record,storageName,deleteRecord}) => {
    let color = '';
    let hoverColor = '';
    if(storageName==='completes'){
        color='bg-green-100';
        hoverColor='hover:bg-green-200';
    }
    else if(storageName==='deletes'){
        color='bg-red-100';
        hoverColor='hover:bg-red-200';
    }

    return (
        <div className={`${color} rounded-md font-bold text-sm py-2 px-4 my-1 grid grid-cols-4 ${hoverColor} duration-150`}>
            <div className='col-span-2 pr-5'><p className='truncate'>{record.todo}</p></div>
            <div><span className='text-gray-500'>{storageName==='deletes' && <span>Delete</span>}{storageName==='completes' && <span>Complete</span>}: </span>{record.delete}</div>
            <div><AiFillDelete onClick={()=>{deleteRecord(storageName,record)}} className='text-2xl block text-red-600 mx-auto hover:scale-110 duration-100 cursor-pointer'></AiFillDelete></div>
            
        </div>
    );
};

export default Record;