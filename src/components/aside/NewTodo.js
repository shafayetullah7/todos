import React, { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

const NewTodo = ({addTodo}) => {

    const [textLength] = useState(50);
    const [remainingLength,setRemainingLength] = useState(textLength);
    const [newtodo,setNewtodo] = useState({todo:'',start:'',end:'',key:''});

    const handleChange = e => {
        const {name,value} = e.target;
        setNewtodo(newData => ({...newData,[name]:value}))
    }

    useEffect(()=>{
        setRemainingLength(textLength-newtodo.todo.length);
    },[newtodo.todo,textLength]);


    const handleAdd = e =>{
        e.preventDefault();
        if(newtodo.todo.length===0){
            alert('Todo cannot be empty.');
            return;
        }
        if(!newtodo.start){
            alert('Must provide start date.');
            return;
        }
        if(new Date(newtodo.start)<new Date()){
            alert('Start date cannot be in past');
            return;
        }
        if(newtodo.end && newtodo.start>newtodo.end){
            alert('Start date must be earlier than End date.');
            return;
        }
        
        newtodo.key = uuidv4();
        addTodo(newtodo);
        setNewtodo({todo:'',start:'',end:'',key:''});
        // console.log(newtodo);
    }

    return (
        <div className='h-fit p-5 border-4 border-green-500 rounded-2xl overflow-auto'>
            <h2 className='text-2xl font-bold mb-5'>Add new todo</h2>

            <div className='flex items-start'>
                <textarea name='todo' 
                    className='border-2 border-green-200 pl-3 pr-7 py-1 rounded-md w-[20rem] h-16 outline-none focus:border-green-400' 
                    maxLength={textLength} 
                    onChange={handleChange} 
                    value={newtodo.todo}
                    placeholder="WHAT TO DO?">

                </textarea>
                <p className='text-xs relative right-5 top-1 text-green-500'>{remainingLength}</p>
            </div>

            <div className='p-5 my-2 rounded-xl flex gap-1 justify-around items-center bg-green-200'>
                <div className='text-sm'>
                    <label className='font-bold' htmlFor="start">Start: </label><input className='border-2 border-green-400 outline-none p-1 rounded-md' name='start' value={newtodo.start} onChange={handleChange} type="date" />
                </div>
                <div className='text-sm'>
                    <label className='font-bold' htmlFor="end">End: </label><input className='border-2 border-green-400 outline-none p-1 rounded-md' name='end' value={newtodo.end} onChange={handleChange} type="date" />
                </div>
            </div>

            <button type='submit' className='bg-green-500 px-7 py-2 block mt-7 rounded-md text-white font-bold active:scale-90 duration-200' onClick={handleAdd}>Add</button>
        </div>
    );
};

export default NewTodo;