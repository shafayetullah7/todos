import React from 'react';
import NewTodo from './NewTodo';
import Previous from './previous/Previous';

const Aside = () => {
    return (
        <div className='flex flex-col h-full'>
            <div className='w-full h-full'>
                <Previous></Previous>
            </div>
            <div className='w-full h-full'>
                <NewTodo></NewTodo>
            </div>
        </div>
    );
};

export default Aside;