import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../Hooks/useServiceDetail';
import './CheckOut.css';

const CheckOut = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div className='w-50 mx-auto'>
            
            <h2>Please Order -"{service.name}" </h2>
            <form>
                <input type="text" name="name"placeholder='name' required id=""/>
            </form>
        </div>
    );
};

export default CheckOut;