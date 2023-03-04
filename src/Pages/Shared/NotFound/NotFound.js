import React from 'react';
import sleepingCart from '../../../images/sleepycat.jpg';
const NotFound = () => {
    return (
        <div>
            <h2 className='text-danger mt-5 mb-1 text-center'>Mechakic is sleeping : 404 !!!</h2>
            <img className='w-100' src={sleepingCart} alt="" />
        </div>
    );
};

export default NotFound;