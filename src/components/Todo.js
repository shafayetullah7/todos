import React from 'react';

import { AiFillDelete } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";

const Todo = ({todo,completeTodo,deleteTodo}) => {
    return (
        <div className='m-2 border border-orange-500 bg-white grid grid-cols-6 p-2 rounded-md'>
            <div className='pr-10 col-span-2'><p className='truncate'>{todo.todo}</p></div>
            <div>{todo.start}</div>
            <div>{todo.end || 'As long as you need'}</div>
            <div><AiFillDelete className='text-2xl block text-red-600 mx-auto hover:scale-110 duration-100 cursor-pointer' onClick={()=>deleteTodo(todo)}></AiFillDelete></div>
            <div><MdOutlineDownloadDone className='text-2xl text-white bg-green-600 block mx-auto hover:scale-110 duration-100 cursor-pointer' onClick={()=>{completeTodo(todo)}}></MdOutlineDownloadDone></div>
        </div>
    );
};

export default Todo;