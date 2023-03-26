import React, { useState } from 'react';

const Todos = () => {
    const [items,setItems] = useState([]);
    console.log(items);

    const handleAdd = () => {
        setItems(items => [...items,items.length+1]);
    }


    return (
        <div className='h-full overflow-auto'>
            <button className='border px-5 py-2 rounded-md' onClick={handleAdd}>add</button>
            {items.map((item,index) => <h1 key={index}>Itme {item}</h1>)}
        </div>
    );
};

export default Todos;