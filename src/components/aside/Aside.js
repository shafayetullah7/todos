import React from 'react';
import NewTodo from './NewTodo';
import History from './previous/History';

const Aside = ({addTodo,deleted,completed,deleteRecord}) => {
    return (
        <div className='flex flex-col h-full gap-5 px-2'>
            <div className='w-full h-[500px] bg-gray-50 rounded-xl'>
                <History completed={completed} deleted={deleted} deleteRecord={deleteRecord}></History>
            </div>
            <div className='w-full'>
                <NewTodo addTodo={addTodo}></NewTodo>
            </div>
        </div>
    );
};

export default Aside;