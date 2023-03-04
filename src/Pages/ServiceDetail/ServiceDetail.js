import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import useServiceDetail from '../../Hooks/useServiceDetail';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div>
            <h1>You are about to book: {service.name} || {service.price} <img src={service.img} alt="" />
            </h1>
            <div className='text-center'>
              <Link to={`/checkout/${serviceId}`}>
                 <Button variant="primary">Proceed Checkout</Button>
              </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;