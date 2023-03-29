import React from 'react';

import { AiFillDelete } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";

const Todo = ({todo,deleteTodo}) => {
    return (
        <div className='border-b border-orange-500 grid grid-cols-6 py-2'>
            <div className='pr-10 col-span-2'><p className='truncate'>{todo.todo}</p></div>
            <div>{todo.start}</div>
            <div>{todo.end || 'As long as you need'}</div>
            <div><AiFillDelete className='text-2xl block text-red-600 mx-auto' onClick={()=>deleteTodo(todo)}></AiFillDelete></div>
            <div><MdOutlineDownloadDone className='text-2xl text-white bg-green-600 block mx-auto'></MdOutlineDownloadDone></div>
        </div>
    );
};

export default Todo;