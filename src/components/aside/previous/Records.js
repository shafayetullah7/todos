import React from 'react';

import Record from './Record';

const Records = ({records,storageName,deleteRecord}) => {
    return (
        <div>
            {records.length>0 && records.map(record=><Record key={record.key} storageName={storageName} deleteRecord={deleteRecord} record={record}></Record>)}
            {records.length===0 && <p className='font-bold text-center'>No items here</p>}
        </div>
    );
};

export default Records;