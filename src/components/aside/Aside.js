import React from 'react';
import NewTodo from './NewTodo';
import Previous from './previous/Previous';

const Aside = ({addTodo}) => {
    return (
        <div className='flex flex-col h-full'>
            <div className='w-full h-full'>
                <Previous></Previous>
            </div>
            <div className='w-full h-full'>
                <NewTodo addTodo={addTodo}></NewTodo>
            </div>
        </div>
    );
};

export default Aside;