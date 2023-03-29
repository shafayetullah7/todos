import React from 'react';
import NewTodo from './NewTodo';
import History from './previous/History';

const Aside = ({addTodo}) => {
    return (
        <div className='flex flex-col h-full'>
            <div className='w-full h-full'>
                <History></History>
            </div>
            <div className='w-full h-full'>
                <NewTodo addTodo={addTodo}></NewTodo>
            </div>
        </div>
    );
};

export default Aside;